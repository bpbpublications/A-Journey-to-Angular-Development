import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../Models/customer';

import { HttpClient } from '@angular/common/http';
import { CustomerItemResponse } from '../Models/HttpResponses/customer.response';
import { NewCustomer } from '../Models/HttpRequests/newcustomer.requests';
import { environment } from 'src/environments/environment';
import { AppConfigService } from './app-config.service';
@Injectable()
export class CustomerService {
  // private Customers: Array<Customer>;

  private IsAddNewSubject: BehaviorSubject<boolean>;
  IsAddNew$: Observable<boolean>;
  private CustomersSubject: Subject<Array<Customer>>;
  Customers$: Observable<Array<Customer>>;
  constructor(private appConfigService: AppConfigService,
              private httpClient: HttpClient) {

    this.IsAddNewSubject = new BehaviorSubject<boolean>(false);
    this.IsAddNew$ = this.IsAddNewSubject.asObservable();
    this.CustomersSubject = new Subject<Array<Customer>>();
    this.Customers$ = this.CustomersSubject.asObservable();
    this.LoadCustomers();
  }
  private LoadCustomers(): void{
    this.httpClient
    .get<Array<CustomerItemResponse>>(`${this.appConfigService.apiUrl}
/customers`)
    .pipe(
      map((customerAPIResponse) => {
        return customerAPIResponse.map(
          (customer) => new Customer(customer.firstName, customer.lastName)
        );
      })
    )
    .subscribe((x) => {
      this.CustomersSubject.next(x);
    });
  }


  // setAddNew(){
  //   this.IsAddNew$ = of(true);
  // }
  // setList(){
  //   this.IsAddNew$ = of(false);
  // }
  setAddNew() {
    this.IsAddNewSubject.next(true);
  }

  setList() {
    this.IsAddNewSubject.next(false);
    this.LoadCustomers();
  }
  Save(customer: Customer) {
    const newCustomer: NewCustomer = new NewCustomer(
      customer.FName,
      customer.LName
    );
    this.httpClient
      .post(`${this.appConfigService.apiUrl}/customers`, newCustomer).subscribe(() => {
        this.LoadCustomers();
        this.IsAddNewSubject.next(false);
      });
  }
}
