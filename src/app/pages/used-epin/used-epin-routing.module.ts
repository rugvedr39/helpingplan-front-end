import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsedEpinPage } from './used-epin.page';

const routes: Routes = [
  {
    path: '',
    component: UsedEpinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsedEpinPageRoutingModule {}
