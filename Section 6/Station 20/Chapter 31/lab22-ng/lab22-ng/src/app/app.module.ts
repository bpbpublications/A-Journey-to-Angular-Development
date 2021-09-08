import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyBoxedContentComponent } from './my-boxed-content/my-boxed-content.component';


@NgModule({
  declarations: [
    AppComponent,
    MyBoxedContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
