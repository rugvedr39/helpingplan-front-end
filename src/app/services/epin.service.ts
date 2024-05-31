import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class EpinService {
  constructor(private http: HttpClient) {}
  getUsedEPinReportByUser(userId: number): Observable<any> {
    return this.http.get(
      `${environment.backendUrl}/epin/getUsedEPinReportByUser/${userId}`,
    );
  }
  getUnusedEPinReport(userId: number): Observable<any> {
    return this.http.get(
      `${environment.backendUrl}/epin/getUnusedEPinReport/${userId}`,
    );
  }
  getTransferdEPinReport(userId: number): Observable<any> {
    return this.http.post(`${environment.backendUrl}/epin/TransferEpinReport/${userId}`,{});
  }

  transferEpin(body: any): Observable<any> {
    return this.http.post(`${environment.backendUrl}/epin/TransferEpin`, body);
  }
}
