import { Routes } from '@angular/router';
import { LoginComponent } from '../Login/login.component';
import { CustomerComponent } from '../Customer/customer.component';
import { AuthGuard } from '../Guards/auth.guard';
import { ErrorTestComponent } from '../ErrorTest/error-test.component';
import { ErrorComponent } from '../Error/error.component';
import { SupplierComponent } from '../Supplier/supplier.component';
import { ProductComponent } from '../Product/product.component';
import { AuthComponent } from '../Auth/auth.component';
// export const AppRoutes: Routes = [
//   { path: 'login', component: LoginComponent },
//   {
//     path: '',
//     component: AuthComponent,canActivate:[AuthGuard],
//     children: [
//       {
//         path: 'customer',
//         component: CustomerComponent
//       },
//       {
//         path: 'supplier',
//         component: SupplierComponent
//       },
//       {
//         path: 'product',
//         component: ProductComponent
//       },
//       {
//         path: '',
//         redirectTo: 'customer', pathMatch: 'full'
//       },
//     ],
//   },
//   { path: 'error-test', component: ErrorTestComponent },
//   { path: 'error', component: ErrorComponent },
//   { path: '**', redirectTo: 'customer', pathMatch: 'full' },
// ];
export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'customer',
        loadChildren: () =>
          import('src/app/Customer/customer.module').then(
            (x) => x.CustomerModule
          ),
      },
      {
        path: 'supplier',
        loadChildren: () =>
          import('src/app/Supplier/supplier.module').then(
            (x) => x.SupplierModule
          ),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('src/app/Product/product.module').then(
            (x) => x.ProductModule
          ),
      },
      {
        path: '',
        redirectTo: 'customer',
        pathMatch: 'full',
      },
    ],
  },
  { path: 'error-test', component: ErrorTestComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'customer', pathMatch: 'full' },
];
