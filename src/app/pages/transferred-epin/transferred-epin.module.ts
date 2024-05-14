import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferredEpinPageRoutingModule } from './transferred-epin-routing.module';

import { TransferredEpinPage } from './transferred-epin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferredEpinPageRoutingModule
  ],
  declarations: [TransferredEpinPage]
})
export class TransferredEpinPageModule {}
