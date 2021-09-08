import { Component } from '@angular/core';

@Component({
  selector: 'app-my-reusable',
  templateUrl: './my-reusable.component.html',
  styleUrls: ['./my-reusable.component.css'],
})
export class MyReusableComponent {
  Message = 'Initial Message';
  constructor() {}

  ChangeMessage(): void {
    this.Message = 'Changed Message';
  }
}
