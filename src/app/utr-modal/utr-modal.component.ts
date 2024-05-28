import { TransactionService } from "./../transaction.service";
import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-utr-modal",
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Enter UTR Number</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label position="floating">UTR Number</ion-label>
        <ion-input [(ngModel)]="utrNumber" type="text"></ion-input>
      </ion-item>
      <ion-button expand="block" (click)="submitUTR()">Confirm</ion-button>
    </ion-content>
  `,
  styleUrls: ["./utr-modal.component.scss"],
})
export class UtrModalComponent implements OnInit {
  @Input() transactionId: number | undefined;
  utrNumber: string | undefined;

  constructor(
    private modalController: ModalController,
    private TransactionService: TransactionService,
  ) {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  submitUTR() {
    this.TransactionService.postTransaction({
      transactionId: this.transactionId,
      utrNumber: this.utrNumber,
    }).subscribe((data: any) => {});
    this.dismiss();
  }
  ngOnInit() {}
}
