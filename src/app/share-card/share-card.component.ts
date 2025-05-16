import { Component } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { environment } from "src/environments/environment";
import { Share } from '@capacitor/share';

@Component({
  selector: "app-share-card",
  templateUrl: "./share-card.component.html",
  styleUrls: ["./share-card.component.scss"],
})
export class ShareCardComponent {
  user: any;
  baseUrl: string = environment.domain;
  referralLink: string;

  constructor(private toastController: ToastController) {
    this.user = JSON.parse(localStorage.getItem("user") || "{}");
    this.referralLink = `${this.baseUrl}/signup?token=${this.user.username}`;
  }

  async presentToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }

  async copyLink() {
    try {
      await navigator.clipboard.writeText(this.referralLink);
      this.presentToast("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy the link:", err);
      this.presentToast("Failed to copy the link, please try again!", 'danger');
    }
  }

  async shareViaOther() {
    try {
      await Share.share({
        title: 'Join me!',
        text: `Join using my referral link: ${this.referralLink}`,
        url: this.referralLink,
        dialogTitle: 'Share referral link'
      });
    } catch (err) {
      console.error("Error sharing:", err);
      this.presentToast("Sharing failed, please try another method", 'danger');
    }
  }

  shareViaEmail() {
    const subject = encodeURIComponent("Join me on this platform!");
    const body = encodeURIComponent(`Hi,\n\nI'm using this great platform and thought you might be interested. Join using my referral link:\n\n${this.referralLink}\n\nBest regards`);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
  }

  shareViaFacebook() {
    const url = encodeURIComponent(this.referralLink);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  }

  shareViaTelegram() {
    const text = encodeURIComponent(`Join me on this platform: ${this.referralLink}`);
    window.open(`https://t.me/share/url?url=${this.referralLink}&text=${text}`, '_blank');
  }

  shareViaWhatsApp() {
    const text = encodeURIComponent(`Join me on this platform: ${this.referralLink}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  // Alternative for mobile devices
  async nativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join me!',
          text: 'Check out this platform using my referral link',
          url: this.referralLink,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      this.presentToast("Web Share API not supported in your browser", 'warning');
    }
  }
}