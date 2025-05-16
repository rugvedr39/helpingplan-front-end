import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  user = JSON.parse(localStorage.getItem("user") || "{}");
  public _usertreedata = new BehaviorSubject<any[]>([]);
  private totalTeamMember = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    this.getReferralTree();
  }

  createUser(userData: any): Observable<any> {
    return this.http.post(`${environment.backendUrl}/auth/signup`, userData);
  }

  getComunicationData(): Observable<any> {
    return this.http.get(`${environment.backendUrl}/admin/getAdminDetails`);
  }

  getUserByReferralCode(referralCode: string): Observable<any> {
    return this.http.get(`${environment.backendUrl}/auth/user/${referralCode}`);
  }

  login(userData: any): Observable<any> {
    return this.http.post(`${environment.backendUrl}/auth/login`, userData);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${environment.backendUrl}/user/user-refarupi/${id}`);
  }

  get TotalMemberGet() {
    return this.totalTeamMember.asObservable();
  }

  getReferralTree() {
    this.http
      .get(`${environment.backendUrl}/transaction/tree/${this.user.id}`)
      .subscribe((data: any) => {
        this._usertreedata.next(data);
        this.countData(data);
      });
  }

  countData(data: any) {
    let totalUsers = 0;

    for (const level of data) {
      totalUsers += level.users.length;
    }
    this.totalTeamMember.next(totalUsers);
  }
}
