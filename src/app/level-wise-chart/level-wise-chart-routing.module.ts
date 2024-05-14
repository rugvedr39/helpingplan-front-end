import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LevelWiseChartPage } from "./level-wise-chart.page";

const routes: Routes = [
  {
    path: "",
    component: LevelWiseChartPage,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelWiseChartPageRoutingModule {}
