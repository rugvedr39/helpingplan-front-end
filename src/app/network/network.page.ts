import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-network",
  templateUrl: "./network.page.html",
  styleUrls: ["./network.page.scss"],
})
export class NetworkPage implements OnInit {
  user: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(`${environment.backendUrl}/transaction/top-receivers`)
      .subscribe((data: any) => {
        this.user = data;
      });
  }
}
