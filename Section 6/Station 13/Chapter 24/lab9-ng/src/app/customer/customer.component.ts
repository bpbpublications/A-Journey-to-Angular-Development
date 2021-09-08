import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../my-test.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(c: MyTestService) {

    console.log(c.counter)
   }

  ngOnInit(): void {
  }

}
