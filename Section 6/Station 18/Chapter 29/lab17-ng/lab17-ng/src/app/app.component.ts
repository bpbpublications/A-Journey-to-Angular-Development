import { ApplicationRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Counter: number = 0;
  constructor(private app: ApplicationRef) {}
  Increement() {
    this.Counter++;
    this.app.tick();
  }
}
