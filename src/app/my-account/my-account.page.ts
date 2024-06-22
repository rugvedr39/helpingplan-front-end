import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { TransferModalComponent } from "../transfer-modal/transfer-modal.component";
import { CheckboxCustomEvent } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.page.html",
  styleUrls: ["./my-account.page.scss"],
})
export class MyAccountPage implements OnInit {
  newPassword: any;
  constructor(private router: Router, private modalCtrl: ModalController, private http:HttpClient) {}

  navigateTo(page: string) {
    const routes: { [key: string]: string } = {
      "view-profile": "/profile",
      "used-epin-report": "/used-epin",
      "unused-epin-report": "/unused-epin",
      "transferred-epin-report": "/transferred-epin",
      "transfer-epin": "/transfer-epin",
      "transaction-history": "/transaction-history",
    };
    this.router.navigate([routes[page as keyof typeof routes]]);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }

  async openTransferModal() {
    const modal = await this.modalCtrl.create({
      component: TransferModalComponent,
      componentProps: {},
    });
    return await modal.present();
  }

  canDismiss = true;

  presentingElement:any = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }

  onChangePassword() {
    const user = JSON.parse(localStorage.getItem('user')||'')
    this.http.put(`${environment.backendUrl}/admin/users/${user.id}`,{
      password: this.newPassword
    }).subscribe((data:any) =>{
      if (data.message=="User updated successfully") {
        alert("User Password Changed successfully")
        this.modalCtrl.dismiss();
      }
    });
  }

}
