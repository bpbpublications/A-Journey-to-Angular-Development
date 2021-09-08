import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from "../Models/customer"
@Component({
  selector: 'customer',
  templateUrl: './customer.component.html'
})

export class CustomerComponent {
  Customers:Array<Customer>;
  IsAddNew:boolean;
  FirstName:string;
  LastName:string;
  @ViewChild('myForm') CustomerForm: NgForm;
  constructor() {
    this.IsAddNew = false;
    //this.Reset();
    this.Customers=new Array<Customer>();
    this.Customers.push(new Customer("Sukesh","Marla"));
    this.Customers.push(new Customer("Just","Compile"));
    this.Customers.push(new Customer("Ram","Lakhan"));
  }

  // ChangeFirstName(value){
  //   this.FirstName=value;
  // }
  // ChangeLastName(value){
  //   this.LastName=value;
  // }
  AddNew(){
    this.IsAddNew = true;
  }
  Reset() {
    // this.FirstName = '';
    // this.LastName = '';
    this.CustomerForm.reset();
  }
  Save(){
    this.Customers.push(new Customer(this.FirstName,this.LastName));
    this.IsAddNew=false;
    this.Reset();
  }
  Cancel(){
    this.IsAddNew=false;
    this.Reset();
  }


}
