import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.page.html",
  styleUrls: ["./my-account.page.scss"],
})
export class MyAccountPage {
  constructor(private router: Router) {}

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
}
