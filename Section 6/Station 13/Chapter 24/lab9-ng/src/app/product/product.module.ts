import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';


const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  }
];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
