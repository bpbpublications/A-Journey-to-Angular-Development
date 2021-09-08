import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent
  }
];
@NgModule({
  declarations: [CustomerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CustomerModule {

  /**
   *
   */
  constructor() {

  }


}
