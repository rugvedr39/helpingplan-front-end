import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-level-details-modal",
  templateUrl: "./level-details-modal.component.html",
  styleUrls: ["./level-details-modal.component.scss"],
})
export class LevelDetailsModalComponent {
  @Input() levelData: any;
  constructor(private modalController: ModalController) {
    console.log(this.levelData);
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
