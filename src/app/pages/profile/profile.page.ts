import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  userData: any;

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const user = localStorage.getItem("user");
    if (user) {
      this.userData = JSON.parse(user);
    } else {
      console.log("No user data found");
      // Handle case where no user data is found
    }
  }
}
