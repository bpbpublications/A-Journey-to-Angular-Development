import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyReusableComponent } from './my-reusable/my-reusable.component';

@NgModule({
  declarations: [AppComponent, MyReusableComponent],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const custom = createCustomElement(MyReusableComponent, {
      injector: this.injector,
    });
    customElements.define('my-custom-angular-element', custom);
  }
  ngDoBootstrap (){}
}
