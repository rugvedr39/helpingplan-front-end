import { Injectable } from "@angular/core";
import { TransactionService } from "./transaction.service";
import { BehaviorSubject } from "rxjs";

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

  constructor(private transactionService: TransactionService) {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    this.fetchDataAndCalculateTotals(user.id);
  }

  fetchDataAndCalculateTotals(userId: any) {
    this.transactionService
      .getTransactionsRecived(userId)
      .subscribe((data: any) => {
        this._transactionData$.next(data);
        let a = false;
        this.calculateTotals(data, a);
      });
    this.transactionService.getTransactions(userId).subscribe((data: any) => {
      this._transactionDataGive$.next(data);
      let a = true;
      this.calculateTotals(data, a);
    });
  }

  calculateTotals(transactions: any[], b: boolean) {
    const totalCompletedPayments = transactions
      .filter((transaction) => transaction.status === "Completed")
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    const totalInitiatedPayments = transactions
      .filter((transaction) => transaction.status === "initiate")
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    if (b == true) {
      this._totalCompletedPaymentsGive$.next(totalCompletedPayments);
      this._totalInitiatedPaymentsGive$.next(totalInitiatedPayments);
    } else {
      this._totalCompletedPayments$.next(totalCompletedPayments);
      this._totalInitiatedPayments$.next(totalInitiatedPayments);
    }
  }
}
