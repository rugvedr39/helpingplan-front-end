import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-bottom-nav-bar",
  templateUrl: "./bottom-nav-bar.component.html",
  styleUrls: ["./bottom-nav-bar.component.scss"],
})
export class BottomNavBarComponent {
  showFooter = true;

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation());
  }

  get isHidden(): boolean {
    // List of routes where the footer should be hidden
    const hideOnRoutes = ["/login", "/signup"];
    return hideOnRoutes.some((path) => this.router.url.includes(path));
  }
}
