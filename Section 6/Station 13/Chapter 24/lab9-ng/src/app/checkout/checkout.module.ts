import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent
  }
];
@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
