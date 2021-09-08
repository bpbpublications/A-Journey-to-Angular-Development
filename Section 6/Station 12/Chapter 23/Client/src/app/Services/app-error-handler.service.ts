import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppErrorsHandler implements ErrorHandler {
  constructor(
    private router: Router,
    private zone:NgZone
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    if(!environment.production){
      alert('Run-time error occured. Kindly check developer tools')
      throw error;
    }
    if (error instanceof HttpResponseBase) {
      this.HandleServerSideError(error); // Indicates its a server side error
    } else {
      this.HandleClientSideError(error); // Indicates its a client side error
    }
  }

  private HandleServerSideError(error: HttpErrorResponse) {
    if (error.status === 0) {
      alert('Server is not running');
    } else if (error.status === 401) {
      this.zone.run(() => this.router.navigate(['/login']));
    } else {
      localStorage.error = error.message;
      this.zone.run(() => this.router.navigate(['/error']));
    }
  }
  private HandleClientSideError(error: Error) {
    localStorage.error = error.message;
    this.zone.run(() => this.router.navigate(['/error']));
  }
}
