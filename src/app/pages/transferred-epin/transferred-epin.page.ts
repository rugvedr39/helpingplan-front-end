import { Component, OnInit } from "@angular/core";
import { EpinService } from "../../services/epin.service";

@Component({
  selector: "app-transferred-epin",
  templateUrl: "./transferred-epin.page.html",
  styleUrls: ["./transferred-epin.page.scss"],
})
export class TransferredEpinPage implements OnInit {
  user = JSON.parse(localStorage.getItem("user") || "{}");
  epins: any[] = [];

  constructor(private epinService: EpinService) {}

  ngOnInit() {
    this.loadTransferredEPins(this.user.id);
  }

  loadTransferredEPins(userId: number) {
    this.epinService.getTransferdEPinReport(userId).subscribe({
      next: (data) => {
        this.epins = data;
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
  }
}