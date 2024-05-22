import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-share-card",
  templateUrl: "./share-card.component.html",
  styleUrls: ["./share-card.component.scss"],
})
export class ShareCardComponent {
  user: any;
  baseUrl: any = environment.domain;
  constructor(private toastController: ToastController) {
    this.user = JSON.parse(localStorage.getItem("user") || "{}");
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  copyLink(url: string) {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        this.presentToast("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy the link:", err);
        this.presentToast("Failed to copy the link, please try again!");
      });
  }
}
