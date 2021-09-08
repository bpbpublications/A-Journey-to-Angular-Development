import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from '../Supplier/supplier.component';
const childRoute: Routes = [{ path: '', component: SupplierComponent }];

@NgModule({
  imports: [RouterModule.forChild(childRoute)],
  declarations: [
    SupplierComponent
  ]
})
export class SupplierModule { }
