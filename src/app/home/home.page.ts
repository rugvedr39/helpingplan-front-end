import { Component, OnInit } from "@angular/core";
import { PaymentsDataService } from "./../payments-data.service";
import { TransactionService } from "./../transaction.service";
import { UserDataService } from "../user-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  totalCompletedPayments: number = 0;
  totalCompletedPaymentsGive: number = 0;
  totalInitiatedPayments: number = 0;
  totalInitiatedPaymentsGive: number = 0;
  Total_member: any = 0;

  constructor(
    private paymentsDataService: PaymentsDataService,
    private userService: UserDataService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.paymentsDataService.totalCompletedPayments$.subscribe((value) => {
      this.totalCompletedPayments = value;
    });
    this.paymentsDataService.totalCompletedPaymentsGive$.subscribe((value) => {
      this.totalInitiatedPaymentsGive = value;
    });

    this.paymentsDataService.totalInitiatedPayments$.subscribe((value) => {
      this.totalInitiatedPayments = value;
    });
    this.paymentsDataService.totalInitiatedPaymentsGive$.subscribe((value) => {
      this.totalInitiatedPaymentsGive = value;
    });
    this.userService.TotalMemberGet.subscribe((value) => {
      this.Total_member = value;
    });
  }
  navigateToLevelWiseChart() {
    this.router.navigate(["/level-wise-chart"]);
  }
  navigateToActive() {
    this.router.navigate(["/active"]);
  }
  navigateToRecived() {
    this.router.navigate(["/amount-recived"]);
  }
}
