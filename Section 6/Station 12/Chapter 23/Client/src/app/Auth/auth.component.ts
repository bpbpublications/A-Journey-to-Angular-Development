import { Component } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  LoginUserFirstName = 'DummyFName';

  constructor(private authenticationService: AuthenticationService) {
      const decodedToken = jwt_decode(localStorage.token);
      this.LoginUserFirstName = decodedToken.firstName;
  }
  logout() {
    this.authenticationService.logout();
  }
}
