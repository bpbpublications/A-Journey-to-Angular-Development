import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  SomeValue: number = 1024;
  FirstName: string = 'Sukesh';
  MiddleName: string = 'Nagesh';
  LastName: string = 'Marla';
  Counter: number = 20;

  HandleClick() {
    if (!localStorage.myValue) {
      localStorage.myValue = 1;
    } else {
      localStorage.myValue = parseInt(localStorage.myValue) + 1;
    }
  }
}
