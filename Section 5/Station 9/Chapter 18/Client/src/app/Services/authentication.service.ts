import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../Models/HttpResponses/authentication.response';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

// @Injectable()
@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    // Change 4 - Subject for dealing with invalid credentials
    private isAuthenticationFailedSubject: Subject<boolean>;
    // Change 6 - Declare Observable
    invalidCredentialsObservable$: Observable<boolean>;

    // Change no 1 - Router Service injected
    constructor(private router: Router, private httpClient: HttpClient) {
      this.isAuthenticationFailedSubject = new Subject<boolean>();
      // Change 7 - Get Observable from Subject
      this.invalidCredentialsObservable$ = this.isAuthenticationFailedSubject.asObservable();
    }


  // Change no 2 - Return type is void
  authenticate(user: User): void {
    // Change no 3 - Observable is subscribed
    this.httpClient
      .post<AuthenticationResponse>('http://localhost:4000/signin', user)
      .subscribe((response: { token: string }) => {
        if (response.token !== undefined) {
          localStorage.token = response.token;
          this.router.navigate(['customer']);
        }else{
          // Change 5 - Notify subscriber that credentials are invalid
          this.isAuthenticationFailedSubject.next(true);
        }
      });
  }
  isAuthenticated(): boolean {
    const token = localStorage.token;
    return token!=null || token!=undefined;
  }
  isTokenExpired(): boolean{
    const helper = new JwtHelperService();
    return helper.isTokenExpired(localStorage.token)
  }
  logout(){
    localStorage.clear();
  }
}
