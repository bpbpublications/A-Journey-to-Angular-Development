import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
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
  constructor(private router: Router,private httpClient:HttpClient) {
    this.IsAuthenticatiionFailed = false;
  }
  login() {
    this.httpClient.post("http://localhost:4000/signin",this.loginForm.value)
    // .subscribe((response:{Token:string})=>{
    //   if(response.Token==undefined){
      .subscribe((response:{token:string})=>{
        if(response.token==undefined){
        this.IsAuthenticatiionFailed = true;
      }
      else{
        localStorage.token=response.token;
        this.router.navigate(['customer']);
      }
    });
  }
}

