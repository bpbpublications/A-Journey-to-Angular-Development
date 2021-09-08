import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  // styleUrls: ['./customer-list.component.css']
  styles: [`.DivContainer {
    border:3px red dotted;
  }`],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
