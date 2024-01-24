import { HttpClient,HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../environments/environments";
@Injectable({
    providedIn:'root'
})

export class LoginService {

    public currentUserSubject

    constructor(private http:HttpClient){
        currentUserSubject : BehaviorSubject<string>;

    }

    login(body: any) {
        const url = `${environment.apiUrl}/users/login`;
        
        this.http.post(url, body).subscribe(response => {
            const token = response['token']
            this.currentUserSubject = token
            console.log(token)
    });
    }
}