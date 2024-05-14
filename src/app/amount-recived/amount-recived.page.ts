import { Component, OnInit } from "@angular/core";
import { UserDataService } from "../user-data.service";
import { TransactionService } from "./../transaction.service";
import { PaymentsDataService } from "./../payments-data.service";

@Component({
  selector: "app-amount-recived",
  templateUrl: "./amount-recived.page.html",
  styleUrls: ["./amount-recived.page.scss"],
})
export class AmountRecivedPage implements OnInit {
  user: any;
  data: any;
  totalCompletedPayments: number = 0;
  totalInitiatedPayments: number = 0;

  constructor(
    private TransactionService: TransactionService,
    private PaymentsDataService: PaymentsDataService,
  ) {}

  ngOnInit() {
    this.PaymentsDataService._transactionData$.subscribe(
      (data) => (this.data = data),
    );

    this.PaymentsDataService.totalCompletedPayments$.subscribe(
      (value) => (this.totalCompletedPayments = value),
    );

    this.PaymentsDataService.totalInitiatedPayments$.subscribe(
      (value) => (this.totalInitiatedPayments = value),
    );
  }

  markAsReceived(transaction: any) {
    if (transaction.status !== "completed") {
      this.TransactionService.TransactionCompleted(transaction.id).subscribe(
        (data: any) => {
          if (data == "done") {
            transaction.status = "completed";
          }
        },
      );
    }
  }
}
