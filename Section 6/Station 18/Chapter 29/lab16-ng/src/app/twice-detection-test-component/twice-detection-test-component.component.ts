import { Component } from '@angular/core';

@Component({
  selector: 'app-twice-detection-test-component',
  templateUrl: './twice-detection-test-component.component.html',
  styleUrls: ['./twice-detection-test-component.component.css'],
})
export class TwiceDetectionTestComponentComponent {
  // getData(): string {
  //   console.log("getData invoked")
  //   return "Just Compile LLP"
  // }

  getData(): number {
    const data = Math.random() * 100;
    console.log(data);
    return data;
  }
  HandleClick() {}
}
