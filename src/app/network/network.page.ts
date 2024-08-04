// achievements.page.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-network",
  templateUrl: "./network.page.html",
  styleUrls: ["./network.page.scss"],
})

export class NetworkPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | undefined ;

  users: any[] = [];
  currentPage = 1;
  pageSize = 30;
  totalCount = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(event?: any) {
    this.http.get(`${environment.backendUrl}/transaction/top-receivers?page=${this.currentPage}&pageSize=${this.pageSize}`)
      .subscribe((response: any) => {
        const existingUserIds = new Set(this.users.map(user => user.receiver_id));
        const newUsers = response.users
        this.users = this.users.concat(newUsers);
        this.totalCount = response.totalCount;
        this.currentPage++;

        if (event) {
          event.target.complete();
        }

        if (this.users.length >= this.totalCount) {
          this.infiniteScroll!.disabled = true;
        }
      }, (error) => {
        console.error('Error fetching users:', error);
        if (event) {
          event.target.complete();
        }
      });
  }

  loadMore(event:any) {
    this.loadUsers(event);
  }
}