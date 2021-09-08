import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './customer-add.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerComponent } from './customer.component';
const childRoute: Routes = [{ path: '', component: CustomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(childRoute), CommonModule, FormsModule],
  declarations: [

    CustomerComponent,
    CustomerListComponent,
    CustomerAddComponent,
  ],
})
export class CustomerModule {}
