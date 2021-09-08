import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { AsyncUniqueProductCodeValidator } from './validators/product-code.validator';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ImageUploadComponent,
    AsyncUniqueProductCodeValidator
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
