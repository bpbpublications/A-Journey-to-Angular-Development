import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ImageUploadComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
