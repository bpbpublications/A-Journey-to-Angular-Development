import { Component } from '@angular/core';
import { CustomerAddData } from '../customer-add-data';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {
  CustomerData: CustomerAddData={CustomerName:"Sukesh"};
  GetMessage(): void {
    console.log('Customer Component message');
  }
  HandleClick(): void  {
    this.CustomerData={CustomerName:"ABCD"};
  }
}
