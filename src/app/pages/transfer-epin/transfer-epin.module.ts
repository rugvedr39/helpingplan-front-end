import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { TransferEpinPageRoutingModule } from "./transfer-epin-routing.module";

import { TransferEpinPage } from "./transfer-epin.page";
import { TransferModalComponent } from "src/app/transfer-modal/transfer-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferEpinPageRoutingModule,
  ],
  declarations: [TransferEpinPage, TransferModalComponent],
})
export class TransferEpinPageModule {}
