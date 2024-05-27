import { TransactionService } from "./../transaction.service";
import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { UserDataService } from "../user-data.service";
import { ModalController } from "@ionic/angular";
import { UtrModalComponent } from "../utr-modal/utr-modal.component";
import { UserDetailsModalComponent } from "../user-details-modal/user-details-modal.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-active",
  templateUrl: "./active.page.html",
  styleUrls: ["./active.page.scss"],
})
export class ActivePage implements OnInit {
  user: any;
  transactions: any;
  constructor(
    private TransactionService: TransactionService,
    private modalController: ModalController,
    private userDataService: UserDataService,
    private toastController: ToastController,
    private router: Router,
  ) {
    this.user = JSON.parse(localStorage.getItem("user") || "{}");
    this.TransactionService.getTransactions(this.user.id).subscribe(
      (data: any) => {
        this.transactions = data;
        console.log(data);
      },
    );
  }

  ngOnInit() {}

  async completePayment(transactionId: number) {
    const modal = await this.modalController.create({
      component: UtrModalComponent,
      componentProps: {
        transactionId: transactionId,
      },
    });
    return await modal.present();
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

  copyUPIId(upiId: string) {
    const textArea = document.createElement("textarea");
    textArea.value = upiId;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    this.presentToast("UPI ID copied to clipboard");
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
}
