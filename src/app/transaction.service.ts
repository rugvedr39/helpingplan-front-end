import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  getTransactions(userId: any) {
    return this.http.get(`${environment.backendUrl}/transaction/get-transaction/${userId}`)
      .pipe(
       
      );
  }

  getTransactionsRecived(userId: any) {
    return this.http.get(`${environment.backendUrl}/transaction/recive-transaction/${userId}`)
      .pipe(
       
      );
  }
  TransactionCompleted(userId:any){
    return this.http.get(`${environment.backendUrl}/transaction/transaction-completed/${userId}`)
  }
  postTransaction(body:any){
    return this.http.post(`${environment.backendUrl}/transaction/post-completed`,body)
  }
}
