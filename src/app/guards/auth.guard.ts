import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user: any = JSON.parse(localStorage.getItem("user") || "{}");
    if (Object.keys(user).length == 0) {
      return this.router.parseUrl("/login");
    } else {
      if (user.status === "notActive") {
        return this.router.parseUrl("/active");
      }
    }
    return true;
  }
}
