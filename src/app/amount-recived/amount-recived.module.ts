import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmountRecivedPageRoutingModule } from './amount-recived-routing.module';

import { AmountRecivedPage } from './amount-recived.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmountRecivedPageRoutingModule
  ],
  declarations: [AmountRecivedPage]
})
export class AmountRecivedPageModule {}
