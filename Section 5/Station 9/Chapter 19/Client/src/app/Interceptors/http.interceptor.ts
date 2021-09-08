import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest }
                  from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     const token = localStorage.token;
     let newHeaders = req.headers;
     if (token) {
       // if token is not undefined
        newHeaders = newHeaders.append('x-access-token', token);
     }

     // HttpRequests are immutable, so it cannot be altered
     // Hence we are creating a clone out of it along with adding headers
     const authReq = req.clone({headers: newHeaders});
     return next.handle(authReq);
  }
}
