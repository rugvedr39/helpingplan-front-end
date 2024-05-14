import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TransferEpinPage } from "./transfer-epin.page";
import { TransferModalComponent } from "src/app/transfer-modal/transfer-modal.component";

const routes: Routes = [
  {
    path: "",
    component: TransferEpinPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferEpinPageRoutingModule {}
