import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferredEpinPage } from './transferred-epin.page';

const routes: Routes = [
  {
    path: '',
    component: TransferredEpinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferredEpinPageRoutingModule {}
