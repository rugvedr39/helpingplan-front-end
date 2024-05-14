import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmountRecivedPage } from './amount-recived.page';

const routes: Routes = [
  {
    path: '',
    component: AmountRecivedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmountRecivedPageRoutingModule {}
