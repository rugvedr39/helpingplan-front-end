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
  users: any[] = [];
  selectedUser: any = null;
  transferringEpin: boolean = false;
  referralData: any;
  newUser: any=null;
count: any;


  constructor(
    private modalCtrl: ModalController,
    private userDataService: UserDataService,
    private epinService: EpinService
  ) {}

  validateReferral() {
      this.userDataService.getUserByReferralCode(this.selectedUser).subscribe(
        (data) => {
          this.newUser = data;
        },
        (error) => {
          console.error("Invalid Referral:", error);
        }
      );

  }

  selectUser(user: any) {
    this.selectedUser = user;
  }

  transfer() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    console.log("Transferring epin to:", this.selectedUser);
    if (this.selectedUser === user.id) {
      alert("You cannot transfer epin to yourself");
      return;
    }
        this.epinService
          .transferEpin({
            ePinCount:this.count ,
            userId: user.id,
            transferredToId: this.newUser.id,
          })
          .subscribe(
            (response) => {
                alert("Epin transferred successfully");
                this.modalCtrl.dismiss();
              console.log(response);
            },
            (error) => {
              alert("insufficent Epins");
            }
          );
      
    
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}