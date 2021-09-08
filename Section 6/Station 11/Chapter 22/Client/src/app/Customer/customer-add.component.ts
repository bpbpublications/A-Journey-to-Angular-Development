import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../Models/customer';
@Component({
  selector: 'customer-add',
  templateUrl: './customer-add.component.html'
})
export class CustomerAddComponent implements AfterViewInit  {
  FirstName: string;
  LastName: string;
  @ViewChild('myForm') CustomerForm: NgForm;
  @Output()OnCancel: EventEmitter<void>=new EventEmitter<void>();
  @Output()OnSave: EventEmitter<Customer> = new EventEmitter<Customer>();
  @ViewChild("firstName") FirstNameControl: ElementRef;
  ngAfterViewInit(){
    this.FirstNameControl.nativeElement.focus();
  }


  Reset() {
    this.CustomerForm.reset();
  }
  Save() {
    this.OnSave.emit(new Customer(this.FirstName,this.LastName));
    this.Reset();
  }
  Cancel() {
    this.OnCancel.emit();
    this.Reset();
  }

}

