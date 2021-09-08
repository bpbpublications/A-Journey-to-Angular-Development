
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  apiUrl: string;
  constructor(private http: HttpClient) {}
  // loadConfig(): Subscription {
  //   return this.http
  //     .get<{apiUrl: string}>('./assets/config.json')
  //     .subscribe(config => {
  //       this.apiUrl = config.apiUrl;
  //     });
  // }
  loadConfig(): Promise<void> {
    return this.http
      .get<{apiUrl: string}>('./assets/config.json').toPromise()
      .then(config => {
        this.apiUrl = config.apiUrl;
      });
  }

}
