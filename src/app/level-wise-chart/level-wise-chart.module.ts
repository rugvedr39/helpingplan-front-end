import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LevelWiseChartPageRoutingModule } from "./level-wise-chart-routing.module";

import { LevelWiseChartPage } from "./level-wise-chart.page";
import { ReferralLevelsComponent } from "../components/referral-levels/referral-levels.component";
import { LevelDetailsModalComponent } from "../components/level-details-modal/level-details-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelWiseChartPageRoutingModule,
  ],
  declarations: [
    LevelWiseChartPage,
    ReferralLevelsComponent,
    LevelDetailsModalComponent,
  ],
})
export class LevelWiseChartPageModule {}
