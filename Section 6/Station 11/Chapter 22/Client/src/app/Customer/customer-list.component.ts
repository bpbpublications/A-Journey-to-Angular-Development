import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';
@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent {
  @Input()
  Customers$: Observable<Array<Customer>>;
  @Output()
  OnAddNew: EventEmitter<void> = new EventEmitter<void>();

  AddNew() {this.OnAddNew.emit();}
}
