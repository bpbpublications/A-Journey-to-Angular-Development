import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'master',
    loadChildren: () =>
      import('src/app/master/master.module').then((x) => x.MasterModule),
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('src/app/transaction/transaction.module').then((x) => x.TransactionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
