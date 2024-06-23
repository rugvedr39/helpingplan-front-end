import { Injectable } from "@angular/core";
import { TransactionService } from "./transaction.service";
import { BehaviorSubject, forkJoin } from "rxjs";
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PaymentsDataService {
  public _transactionData$ = new BehaviorSubject<any[]>([]);
  public _transactionDataGive$ = new BehaviorSubject<any[]>([]);
  private _totalCompletedPayments$ = new BehaviorSubject<number>(0);
  private _totalCompletedPaymentsGive$ = new BehaviorSubject<number>(0);
  private _totalInitiatedPayments$ = new BehaviorSubject<number>(0);
  private _totalInitiatedPaymentsGive$ = new BehaviorSubject<number>(0);

  get totalCompletedPayments$() {
    return this._totalCompletedPayments$.asObservable();
  }

  get totalInitiatedPayments$() {
    return this._totalInitiatedPayments$.asObservable();
  }

  get totalCompletedPaymentsGive$() {
    return this._totalCompletedPaymentsGive$.asObservable();
  }

  get totalInitiatedPaymentsGive$() {
    return this._totalInitiatedPaymentsGive$.asObservable();
  }


  // ... getters remain the same ...

  constructor(private transactionService: TransactionService) {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    this.fetchDataAndCalculateTotals(user.id);
  }

  fetchDataAndCalculateTotals(userId: any) {
    forkJoin({
      received: this.transactionService.getTransactionsRecived(userId),
      given: this.transactionService.getTransactions(userId)
    }).pipe(
      tap(({ received, given }) => {
       
      }),
      map(({ received, given }) => {
        this.calculateTotals(this.ensureArray(received), false);
        this.calculateTotals(this.ensureArray(given), true);
        return { received, given };
      })
    ).subscribe(
      ({ received, given }) => {
        this._transactionData$.next(this.ensureArray(received));
        this._transactionDataGive$.next(this.ensureArray(given));
      },
      error => console.error('Error fetching transactions:', error)
    );
  }

  private ensureArray(data: any): any[] {
    if (Array.isArray(data)) {
      return data;
    } else if (typeof data === 'object' && data !== null) {
      return Object.values(data);
    } else {
      console.warn('Unexpected data format:', data);
      return [];
    }
  }

  calculateTotals(transactions: any[], isGive: boolean) {
    const totalCompletedPayments = transactions
      .filter((transaction) => transaction.status == "Completed")
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    const totalInitiatedPayments = transactions
      .filter((transaction) => transaction.status === "initiate")
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    if (isGive) {
      this._totalCompletedPaymentsGive$.next(totalCompletedPayments);
      this._totalInitiatedPaymentsGive$.next(totalInitiatedPayments);
    } else {
      this._totalCompletedPayments$.next(totalCompletedPayments);
      this._totalInitiatedPayments$.next(totalInitiatedPayments);
    }
  }
}