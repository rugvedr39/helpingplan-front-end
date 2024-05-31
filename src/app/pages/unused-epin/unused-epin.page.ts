import { Component, OnInit } from "@angular/core";
import { EpinService } from "../../services/epin.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-unused-epin",
  templateUrl: "./unused-epin.page.html",
  styleUrls: ["./unused-epin.page.scss"],
})
export class UnusedEpinPage implements OnInit {
  user = JSON.parse(localStorage.getItem("user") || "{}");
  unusedEPins: any[] = [];

  constructor(
    private epinService: EpinService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadUnusedEPins(this.user.id);
  }

  loadUnusedEPins(userId: number) {
    this.epinService.getUnusedEPinReport(userId).subscribe({
      next: (data) => {
        this.unusedEPins = data.data;
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });
  }

  copyEpinCode(epinCode: string) {
    const textArea = document.createElement("textarea");
    textArea.value = epinCode;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    this.showToast('Epin code copied to clipboard');
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }
}