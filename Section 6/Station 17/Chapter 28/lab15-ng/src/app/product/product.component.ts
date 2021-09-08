import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
