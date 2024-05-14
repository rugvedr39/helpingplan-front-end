import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivePageRoutingModule } from './active-routing.module';

import { ActivePage } from './active.page';
import { UtrModalComponent } from '../utr-modal/utr-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivePageRoutingModule,
    
  ],
  declarations: [ActivePage,UtrModalComponent]
})
export class ActivePageModule {}
