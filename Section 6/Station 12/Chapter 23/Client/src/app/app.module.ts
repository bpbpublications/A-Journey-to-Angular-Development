import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './Customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './Routes/app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './Interceptors/http.interceptor';
import {
  MultiRndService,
  MultiRndService2,
  RND_TOKEN,
} from './Services/multi-rnd.service';
import { initializeConfig } from './Services/app-initializer';
import { AppConfigService } from './Services/app-config.service';
import { ErrorTestComponent } from './ErrorTest/error-test.component';
import { ErrorComponent } from './Error/error.component';
import { AppErrorsHandler } from './Services/app-error-handler.service';
import { ProductComponent } from './Product/product.component';
import { SupplierComponent } from './Supplier/supplier.component';
import { AuthComponent } from './Auth/auth.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorTestComponent,
    ErrorComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      multi: true,
      deps: [AppConfigService],
    },
    { provide: ErrorHandler, useClass: AppErrorsHandler },
    ,
    // {provide: MultiRndService, useClass: MultiRndService},
    // {provide: MultiRndService, useClass: MultiRndService2},
    // {provide: MultiRndService, useClass: MultiRndService, multi: true},
    // {provide: MultiRndService, useClass: MultiRndService2, multi: true},
    // , {provide: 'RND_VALUE', useClass: MultiRndService, multi: true},
    //   {provide: 'RND_VALUE', useClass: MultiRndService2, multi: true},
    { provide: RND_TOKEN, useClass: MultiRndService, multi: true },
    { provide: RND_TOKEN, useClass: MultiRndService2, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
