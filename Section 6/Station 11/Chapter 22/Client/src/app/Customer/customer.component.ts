import { Component, Inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';
import * as jwt_decode from 'jwt-decode';
import { AuthenticationService } from '../Services/authentication.service';
import { CustomerService } from '../Services/customer.service';
import { MultiRndService, RND_TOKEN } from '../Services/multi-rnd.service';
@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  providers: [CustomerService]
})
export class CustomerComponent {
  IsAddNew$: Observable<boolean>;
  Customers$: Observable<Array<Customer>>;

  LoginUserFirstName = 'DummyFName';
  constructor(private customerService: CustomerService,
              private authenticationService: AuthenticationService) {
    const decodedToken = jwt_decode(localStorage.token);
    this.LoginUserFirstName = decodedToken.firstName;
    this.IsAddNew$ = this.customerService.IsAddNew$;
    this.Customers$ = this.customerService.Customers$;
  }
  AddNew() {
    this.customerService.setAddNew();
  }
  Save(c: Customer) {
    this.customerService.Save(c);
  }
  Cancel() {
    this.customerService.setList();
  }
  logout() {
    this.authenticationService.logout();
  }
}

