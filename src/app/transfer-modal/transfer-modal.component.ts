import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { UserDataService } from "../user-data.service";
import { EpinService } from "../services/epin.service";

@Component({
  selector: "app-transfer-modal",
  templateUrl: "./transfer-modal.component.html",
  styleUrls: ["./transfer-modal.component.scss"],
})
export class TransferModalComponent {
  @Input() referralCode: string = "";
  refralUsername: string = "";
  referralData: any;
  constructor(
    private modalCtrl: ModalController,
    private userDataService: UserDataService,
    private epinService: EpinService,
  ) {}

  validateReferral() {
    if (this.referralCode) {
      this.userDataService.getUserByReferralCode(this.refralUsername).subscribe(
        (data) => {
          this.referralData = data;
        },
        (error) => {
          console.error("Invalid Referral:", error);
        },
      );
    }
  }

  transfer() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (this.referralCode) {
      if (this.referralData) {
        this.epinService
          .transferEpin({
            code: this.referralCode,
            transferredById: user.id,
            transferredtoId: this.referralData.id,
          })
          .subscribe({
            next: (response) => {
              alert("Transfer successful");
              this.dismissModal();
            },
            error: (error) => {
              console.error("Transfer failed:", error);
            },
          });
      }
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
