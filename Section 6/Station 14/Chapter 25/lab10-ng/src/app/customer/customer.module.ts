import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [CustomerComponent,HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[CustomerComponent]
})
export class CustomerModule { }
