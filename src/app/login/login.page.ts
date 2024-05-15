// src/app/login/login.page.ts

import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserDataService } from "../user-data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userDataService: UserDataService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.userDataService.login(this.loginForm.value).subscribe({
        next: (data) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            window.location.href = "/home";
          }
          if (data.message == "User not found") {
            alert("User not found");
          }
          if (data.message == "Invalid credentials") {
            alert("Invalid credentials");
          }
        },
        error: (data) => {
          alert(data);
        },
      });
    }
  }
}
