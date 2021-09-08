import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  //providers:[{provide: AuthenticationService ,useClass: AuthenticationService }]
  providers: [AuthenticationService],
})
export class LoginComponent {
  loginForm = new FormGroup({
    UserName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  IsAuthenticatiionFailed: boolean;
  constructor(private authenticationService: AuthenticationService) {
    this.IsAuthenticatiionFailed = false;
    this.authenticationService.invalidCredentialsObservable$.subscribe((x) =>
    {
      this.IsAuthenticatiionFailed = x;
    });
  }

  // login() {
  //     this.authenticationService.authenticate(this.loginForm.value)
  //     .subscribe((response:{token:string})=>{
  //       if(response.token==undefined){
  //       this.IsAuthenticatiionFailed = true;
  //     }
  //     else{
  //       localStorage.token=response.token;
  //       this.router.navigate(['customer']);
  //     }
  //   });
  // }
  login() {
    this.authenticationService.authenticate(this.loginForm.value);
  }
}
