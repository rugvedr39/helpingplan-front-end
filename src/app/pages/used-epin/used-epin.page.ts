import { Component, OnInit } from "@angular/core";
import { EpinService } from "../../services/epin.service";

@Component({
  selector: "app-used-epin",
  templateUrl: "./used-epin.page.html",
  styleUrls: ["./used-epin.page.scss"],
})
export class UsedEpinPage implements OnInit {
  user = JSON.parse(localStorage.getItem("user") || "{}");
  usedEPins: any[] = [];
  constructor(private epinService: EpinService) {}

  ngOnInit() {
    this.loadUsedEPins(this.user.id);
  }

  loadUsedEPins(userId: number) {
    this.epinService.getUsedEPinReportByUser(userId).subscribe({
      next: (data) => {
        this.usedEPins = data;
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
  }
}
