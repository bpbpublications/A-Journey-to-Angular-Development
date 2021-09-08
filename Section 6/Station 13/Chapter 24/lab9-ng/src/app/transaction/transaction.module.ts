import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'checkin',
    loadChildren: () =>
      import('src/app/checkin/checkin.module').then((x) => x.CheckinModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('src/app/checkout/checkout.module').then((x) => x.CheckoutModule),
  }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TransactionModule {}
