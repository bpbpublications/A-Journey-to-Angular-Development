import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab11-ng';
  CurrentAuthorization = localStorage.IsAuthorized;
  Change(): void {

    localStorage.IsAuthorized =
      localStorage.IsAuthorized === 'true' ? false : true;

    this.CurrentAuthorization = localStorage.IsAuthorized;
  }
}
