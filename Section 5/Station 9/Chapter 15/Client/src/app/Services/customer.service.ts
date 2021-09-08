import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Customer } from '../Models/customer';
@Injectable()
export class CustomerService {
  private Customers: Array<Customer>;

  private IsAddNewSubject: BehaviorSubject<boolean>;
  IsAddNew$: Observable<boolean>;
  Customers$: Observable<Array<Customer>>;

  constructor() {
    this.IsAddNewSubject = new BehaviorSubject<boolean>(false);
    this.IsAddNew$ = this.IsAddNewSubject.asObservable();

    this.Customers = new Array<Customer>();
    this.Customers.push(new Customer('Sukesh', 'Marla'));
    this.Customers.push(new Customer('Just', 'Compile'));
    this.Customers.push(new Customer('Ram', 'Lakhan'));

    this.Customers$ = of(this.Customers);
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
  }

  Save(customer: Customer) {
    this.Customers.push(customer);
    this.Customers$ = of(this.Customers);
    this.IsAddNewSubject.next(false);
  }
}
