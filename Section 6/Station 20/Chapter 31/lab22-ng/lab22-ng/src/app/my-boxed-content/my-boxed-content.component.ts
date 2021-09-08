import {
  Component,
  ContentChild,
  ElementRef,

  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-my-boxed-content',
  templateUrl: './my-boxed-content.component.html',
  styleUrls: ['./my-boxed-content.component.css'],
})
export class MyBoxedContentComponent {
  @ContentChild('MyHeader') HeaderElement: ElementRef;
  constructor(private renderer: Renderer2) {}

  ChangeStyle(): void {
    this.renderer.setStyle(
      this.HeaderElement.nativeElement,
      'font-style',
      'italic'
    );
  }
}
