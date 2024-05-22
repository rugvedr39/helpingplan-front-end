import { Component, OnInit } from "@angular/core";
import { UserDataService } from "../user-data.service";
import { TransactionService } from "./../transaction.service";
import { PaymentsDataService } from "./../payments-data.service";
import { ModalController } from "@ionic/angular";
import { UserDetailsModalComponent } from "../user-details-modal/user-details-modal.component";

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
    private userDataService: UserDataService,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.PaymentsDataService._transactionData$.subscribe((data) => {
      this.data = data;
      console.log(data);
    });

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

  openUserDetails(userId: number) {
    this.userDataService.getUser(userId).subscribe({
      next: async (userData) => {
        const modal = await this.modalController.create({
          component: UserDetailsModalComponent,
          componentProps: {
            userData: userData,
          },
        });
        return await modal.present();
      },
      error: (err) => {
        console.error("Error fetching user data:", err);
      },
    });
  }
}
