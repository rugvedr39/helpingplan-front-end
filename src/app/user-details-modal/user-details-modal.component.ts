import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-user-details-modal",
  templateUrl: "./user-details-modal.component.html",
  styleUrls: ["./user-details-modal.component.scss"],
})
export class UserDetailsModalComponent {
  @Input() userData: any;

  constructor(private modalCtrl: ModalController) {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
