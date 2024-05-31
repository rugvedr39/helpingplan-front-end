import { Component, OnInit } from "@angular/core";
import { EpinService } from "../../services/epin.service";
import { UserDataService } from "../../user-data.service";
import { ModalController } from "@ionic/angular";
import { TransferModalComponent } from "../../transfer-modal/transfer-modal.component";

@Component({
  selector: "app-transfer-epin",
  templateUrl: "./transfer-epin.page.html",
  styleUrls: ["./transfer-epin.page.scss"],
})
export class TransferEpinPage implements OnInit {
  user = JSON.parse(localStorage.getItem("user") || "{}");
  unusedEPins: any[] = [];
  showModal: boolean = false;

  constructor(
    private epinService: EpinService,
    private userDataService: UserDataService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.loadUnusedEPins(this.user.id);
  }

  loadUnusedEPins(userId: number) {
    this.epinService.getUnusedEPinReport(userId).subscribe({
      next: (data) => {
        this.unusedEPins = data.data;
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
  }

  async openTransferModal(epinCode: string) {
    const modal = await this.modalCtrl.create({
      component: TransferModalComponent,
      componentProps: {
        referralCode: epinCode,
      },
    });
    return await modal.present();
  }
}