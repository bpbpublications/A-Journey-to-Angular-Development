import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ExternalCSSTestComponentComponent } from './external-csstest-component/external-csstest-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    ProductComponent,
    ProductDashboardComponent,
    ExternalCSSTestComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
