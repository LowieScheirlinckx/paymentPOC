import { HttpClient,HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environments";
@Injectable({
    providedIn:'root'
})
export class PaymentService {

    constructor(private http:HttpClient){

    }

    processPayment(body: any): Observable<any> {
        const url = `${environment.apiUrl}/users/test`;
        return this.http.post(url, body);
    }

}