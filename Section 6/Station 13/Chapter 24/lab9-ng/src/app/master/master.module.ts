import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () =>
      import('src/app/customer/customer.module').then((x) => x.CustomerModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('src/app/product/product.module').then((x) => x.ProductModule),
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MasterModule {}
