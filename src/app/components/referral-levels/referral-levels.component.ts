import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-referral-levels",
  templateUrl: "./referral-levels.component.html",
  styleUrls: ["./referral-levels.component.scss"],
})
export class ReferralLevelsComponent {
  @Input() level: any = [];
  @Output() levelClicked = new EventEmitter<number>();

  handleUserClick(level: number): void {
    this.levelClicked.emit(level);
  }
}
