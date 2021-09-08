import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConcatPipe } from './concat.pipe';
import { FileSizePipe } from './file-size.pipe';
import { ImpureTestPipe } from './impure-test.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FileSizePipe,
    ConcatPipe,
    ImpureTestPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
