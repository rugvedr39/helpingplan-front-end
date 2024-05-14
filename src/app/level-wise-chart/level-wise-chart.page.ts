import { Component, OnInit } from "@angular/core";
import { UserDataService } from "../user-data.service";
import { ModalController } from "@ionic/angular";
import { LevelDetailsModalComponent } from "../components/level-details-modal/level-details-modal.component";

@Component({
  selector: "app-level-wise-chart",
  templateUrl: "./level-wise-chart.page.html",
  styleUrls: ["./level-wise-chart.page.scss"],
})
export class LevelWiseChartPage implements OnInit {
  referralTree: any;
  levels: number[] = [];

  constructor(
    private referralTreeService: UserDataService,
    private modalController: ModalController,
  ) {}
  ngOnInit() {
    this.loadReferralTree();
  }

  loadReferralTree() {
    this.referralTreeService._usertreedata.subscribe((data) => {
      this.referralTree = data;
    });
  }

  handleLevelClick(levelIndex: number) {
    // const levelData = this.getLevelData(this.referralTree, levelIndex);
    // this.openLevelDetailsModal(levelData);
  }

  async openLevelDetailsModal(levelData: any) {
    console.log(levelData);
    const modal = await this.modalController.create({
      component: LevelDetailsModalComponent,
      componentProps: { levelData: levelData },
    });
    return await modal.present();
  }
}
