import { TransactionService } from './../transaction.service';
import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { ModalController } from '@ionic/angular';
import { UtrModalComponent } from '../utr-modal/utr-modal.component';

@Component({
  selector: 'app-active',
  templateUrl: './active.page.html',
  styleUrls: ['./active.page.scss'],
})
export class ActivePage implements OnInit {
  user:any
  transactions:any
  constructor(private TransactionService: TransactionService,private modalController: ModalController) {
    this.user = JSON.parse(localStorage.getItem('user')||'{}')
    this.TransactionService.getTransactions(this.user.id).subscribe((data:any)=>{
      this.transactions=data
      console.log(data);
      
    })
  }

  ngOnInit() {}

  async completePayment(transactionId: number) {
    const modal = await this.modalController.create({
      component: UtrModalComponent,
      componentProps: {
        transactionId: transactionId
      }
    });
    return await modal.present();
  }

}
