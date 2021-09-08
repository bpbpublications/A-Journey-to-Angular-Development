import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent,HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[ProductComponent]
})
export class ProductModule { }
