import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnusedEpinPage } from './unused-epin.page';

const routes: Routes = [
  {
    path: '',
    component: UnusedEpinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnusedEpinPageRoutingModule {}
