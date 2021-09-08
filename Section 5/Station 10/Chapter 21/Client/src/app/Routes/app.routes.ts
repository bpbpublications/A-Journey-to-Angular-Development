import { Routes } from '@angular/router';
import { LoginComponent } from '../Login/login.component';
import { CustomerComponent } from '../Customer/customer.component';
import { AuthGuard } from '../Guards/auth.guard';
import { ErrorTestComponent } from '../ErrorTest/error-test.component';
import { ErrorComponent } from '../Error/error.component';
export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'error-test', component: ErrorTestComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'customer', pathMatch: 'full' },
];
