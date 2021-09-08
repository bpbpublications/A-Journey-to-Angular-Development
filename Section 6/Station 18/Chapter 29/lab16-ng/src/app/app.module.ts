import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TwiceDetectionTestComponentComponent } from './twice-detection-test-component/twice-detection-test-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TwiceDetectionTestComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
