import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseOverDirective } from './mouse-over.directive';
import { OnlyIfUserIsAuthorizedDirective } from './only-if-user-is-authorized.directive';
import { CustomMessageComponent } from './custom-message/custom-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseOverDirective,
    OnlyIfUserIsAuthorizedDirective,
    CustomMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
