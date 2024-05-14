import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserDataService } from "../user-data.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage {
  signupForm: FormGroup;
  referralData: any;

  constructor(private userDataService: UserDataService) {
    this.signupForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      mobile_number: new FormControl("", Validators.required),
      bank_details: new FormGroup({
        bank_name: new FormControl(""),
        account_number: new FormControl(""),
        ifsc_code: new FormControl(""),
      }),
      upi_number: new FormControl("", Validators.required),
      referral_code: new FormControl("", Validators.required),
    });
  }

  validateReferral() {
    let control = this.signupForm.get("referral_code");
    return new Promise((resolve) => {
      if (control?.value) {
        this.userDataService.getUserByReferralCode(control.value).subscribe(
          (data) => {
            this.referralData = data.name;
            resolve(null);
          },
          (error) => {
            alert("invalid Referral");
            this.referralData = undefined;
          },
        );
      } else {
        resolve({ required: true });
      }
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.userDataService.createUser(this.signupForm.value).subscribe({
        next: (data) => {
          console.log(data);

          alert(`Your UserId is ${data.username}`);
        },
        error: (error) => {
          if (error.status === 409) {
            alert(`Signup failed: ${error.error.message}`);
          } else {
            alert("Signup failed. Please try again later.");
          }
        },
      });
    } else {
      alert("Please fill in all required fields correctly.");
    }
  }
}
