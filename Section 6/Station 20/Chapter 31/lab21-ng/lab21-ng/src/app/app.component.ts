import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild('MyTextbox') element: ElementRef;
  // ChangeValue(): void {
  //   this.element.nativeElement.value = 'My Value';
  // }

  @ViewChildren('MyTextbox') elements: QueryList<ElementRef>;
  ChangeValue(): void {
    this.elements.forEach((x) => {
      x.nativeElement.value = 'My Value';
    });
  }
}
