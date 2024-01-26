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
    
    processPayment(values: any): Observable<any> {
        const body = {
                amount: { currency: 'EUR', value: values.amount.toFixed(2) },
                description: values.description,
                redirectUrl: `${environment.baseUrl}/payments`,
        }
        const url = `${environment.apiUrl}/payments/payment`;
        return this.http.post(url, body);
    }

    getPayments(): Observable<any> {
        const url = `${environment.apiUrl}/payments/getpayments`;
        return this.http.get(url);
    }

    

}