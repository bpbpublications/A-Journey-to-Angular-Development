import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-message',
  templateUrl: './custom-message.component.html',
  styleUrls: ['./custom-message.component.css'],
})
export class CustomMessageComponent implements OnInit {
  @Input() Message: string = 'Default message';
  constructor() {}

  ngOnInit(): void {}
}
