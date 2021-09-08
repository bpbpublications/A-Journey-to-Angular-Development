import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,// DontDeleteComponent
  ],
  imports: [BrowserModule,CustomerModule,ProductModule],
  providers: [],
  bootstrap: [AppComponent]
  // ,entryComponents:[DontDeleteComponent]
})
export class AppModule {}
