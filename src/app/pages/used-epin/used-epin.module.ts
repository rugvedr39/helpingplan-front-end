import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsedEpinPageRoutingModule } from './used-epin-routing.module';

import { UsedEpinPage } from './used-epin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsedEpinPageRoutingModule
  ],
  declarations: [UsedEpinPage]
})
export class UsedEpinPageModule {}
