import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppConfigService } from '../Services/app-config.service';

@Component({
  selector: 'error-test',
  templateUrl: './error-test.component.html'
})
export class ErrorTestComponent {
  constructor(private appConfigService: AppConfigService,
              private httpClient: HttpClient) {
}

  throwClientError() {
    throw new Error('Testing client side error !!!');
 }
 throwServerError(){
  this.httpClient.get(`${this.appConfigService.apiUrl}/getError`).subscribe();
}
throwUnAuthorizedError(){
  this.httpClient.get(`${this.appConfigService.apiUrl}/authTest`).
subscribe();
}
}
