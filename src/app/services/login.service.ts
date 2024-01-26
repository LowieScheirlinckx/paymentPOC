import { HttpClient,HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map } from "rxjs";
import { environment } from "../../environments/environments";

@Injectable({
    providedIn:'root'
})

export class LoginService {
    private isLoggedInSubject: BehaviorSubject<boolean>;

    get isLoggedIn$(): Observable<boolean> {
      return this.isLoggedInSubject.asObservable();
    }
  
    constructor(private http: HttpClient) {
      this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
    }


    
    login(body: any): Observable<boolean> {
        const url = `${environment.apiUrl}/users/login`;
    
        return this.http.post(url, body).pipe(
          map((response: any) => {
            const token = response.token;
            if (token) {
              localStorage.setItem('Token', token);
              this.isLoggedInSubject.next(true);
              return true;
            } else {
              return false;
            }
          })
        );
      }

      public hastoken(): boolean {
        return localStorage.getItem('Token') !== '';
      }
    
    
      logout(): void {
        localStorage.removeItem('Token');
        this.isLoggedInSubject.next(false);
      }
}
