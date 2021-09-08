import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../Services/authentication.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  // providers:[{provide: AuthenticationService ,useClass: AuthenticationService }]
  // providers: [AuthenticationService],
})
export class LoginComponent // implements OnDestroy
/* Read: Implementing OnDestroy is not needed
      as unsubscribing will be handled by async pipe */
{
  /*Read: No need to hold the subscription as observable
        will be auto unsubscribed when the component is destroyed */

  // invalidCredentialsSubscription: Subscription;

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

  /* Read:  no boolean variable needed
      instead we need Observable boolean */
  IsAuthenticatiionFailed$: Observable<boolean>;
  // IsAuthenticatiionFailed: boolean;

  constructor(private authenticationService: AuthenticationService) {

    // this.IsAuthenticatiionFailed = false;
    this.IsAuthenticatiionFailed$ = this.authenticationService.invalidCredentialsObservable$;

    /* Read: No need for a manual subscription,
          the async pipe will take care of the subscription */

    // this.invalidCredentialsSubscription = this.authenticationService.invalidCredentialsObservable$.subscribe(
    //   (x) => {
    //     this.IsAuthenticatiionFailed = x;
    //   }
    // );
  }
  // ngOnDestroy(): void {
  //   this.invalidCredentialsSubscription.unsubscribe();
  // }
  login() {
    this.authenticationService.authenticate(this.loginForm.value);
  }
}

