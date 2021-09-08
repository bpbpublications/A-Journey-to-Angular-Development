import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  GetMessage(): void {
    console.log('Product Component message');
  }
  HandleClick(): void  {}
}
