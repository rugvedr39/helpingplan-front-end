import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { PaymentsDataService } from "./../payments-data.service";
import { UserDataService } from "../user-data.service";
import { Router } from "@angular/router";
import { combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
  dataLoaded: boolean = false;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private paymentsDataService: PaymentsDataService,
    private userService: UserDataService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    combineLatest([
      this.paymentsDataService.totalCompletedPayments$,
      this.paymentsDataService.totalCompletedPaymentsGive$,
      this.paymentsDataService.totalInitiatedPayments$,
      this.paymentsDataService.totalInitiatedPaymentsGive$,
      this.userService.TotalMemberGet
    ]).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(
      ([completedPayments, completedPaymentsGive, initiatedPayments, initiatedPaymentsGive, totalMembers]) => {
        this.totalCompletedPayments = completedPayments;
        this.totalCompletedPaymentsGive = completedPaymentsGive;
        this.totalInitiatedPayments = initiatedPayments;
        this.totalInitiatedPaymentsGive = initiatedPaymentsGive;
        this.Total_member = totalMembers;
        this.dataLoaded = true;
        this.cdr.detectChanges();
      },
      error => {
        console.error('Error loading data:', error);
        this.dataLoaded = true;
        this.cdr.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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

  gotoproduct() {
    this.router.navigate(["/product"], { skipLocationChange: true });
  }

  // ... rest of your component methods ...
}