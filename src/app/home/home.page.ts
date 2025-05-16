import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { PaymentsDataService } from "./../payments-data.service";
import { UserDataService } from "../user-data.service";
import { Router } from "@angular/router";
import { combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ToastController } from "@ionic/angular";

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
  zoomTime: string = "2023-10-01T10:00:00Z"; // Example date
  zoomMeetingTitle: string = "Weekly Meeting"; // Example title
  zoomLink: string = "https://example.com/zoom"; // Example link
  whatsappLink: string = "https://example.com/whatsapp"; // Example link

  private unsubscribe$ = new Subject<void>();

  constructor(
    private paymentsDataService: PaymentsDataService,
    private userService: UserDataService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastController: ToastController
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

    this.userService.getComunicationData().subscribe(
      (data: any) => {
       console.log("data", data);
       this.zoomTime = data.data.zoomMeetingTime;
       this.zoomLink = data.data.zoomMeetingUrl;
       this.zoomMeetingTitle = data.data.zoomMeetingTitle;
        this.whatsappLink = data.data.whatsappGroupUrl;
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

  refreshData(){

  }

  async joinWhatsApp() {
    if (!this.whatsappLink) {
      this.showToast('WhatsApp group link is not available');
      return;
    }

    try {
      // Format WhatsApp link
      let whatsappUrl = this.formatWhatsAppLink(this.whatsappLink);
      
      // Open in new tab
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      this.showToast('Could not open WhatsApp');
    }
  }

  async joinZoom() {
    if (!this.zoomLink) {
      this.showToast('Zoom meeting link is not available');
      return;
    }

    try {
      // Format Zoom link
      let zoomUrl = this.formatZoomLink(this.zoomLink);
      
      // Open in new tab
      window.open(zoomUrl, '_blank');
    } catch (error) {
      console.error('Error joining Zoom meeting:', error);
      this.showToast('Could not open Zoom meeting');
    }
  }

  private formatWhatsAppLink(link: string): string {
    // Basic validation and formatting
    if (link.startsWith('https://chat.whatsapp.com/')) {
      return link;
    }
    
    // Extract group ID from various formats
    const groupId = link.split('/').pop() || '';
    return `https://chat.whatsapp.com/${groupId}`;
  }

  private formatZoomLink(link: string): string {
    // If already a proper Zoom URL
    if (link.includes('zoom.us/j/') || link.includes('zoom.us/my/')) {
      return link.startsWith('http') ? link : `https://${link}`;
    }
    
    // Format as direct Zoom meeting link
    const meetingId = link.split('/').pop() || '';
    return `https://zoom.us/j/${meetingId}`;
  }


   private async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }

}