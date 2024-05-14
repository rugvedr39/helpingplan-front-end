import { Component, OnInit } from "@angular/core";
import { EpinService } from "../../services/epin.service";

@Component({
  selector: "app-unused-epin",
  templateUrl: "./unused-epin.page.html",
  styleUrls: ["./unused-epin.page.scss"],
})
export class UnusedEpinPage implements OnInit {
  user = JSON.parse(localStorage.getItem("user") || "{}");
  unusedEPins: any[] = [];

  constructor(private epinService: EpinService) {}

  ngOnInit() {
    this.loadUnusedEPins(this.user.id);
  }
  loadUnusedEPins(userId: number) {
    this.epinService.getUnusedEPinReport(userId).subscribe({
      next: (data) => {
        this.unusedEPins = data;
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
  }
}
