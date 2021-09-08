import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
const childRoute: Routes = [{ path: '', component: ProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(childRoute)],
  declarations: [
ProductComponent],
})
export class ProductModule { }
