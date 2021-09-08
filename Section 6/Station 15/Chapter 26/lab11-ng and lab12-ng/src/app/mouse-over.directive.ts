import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mouse-over-color]'
})
export class MouseOverDirective implements OnInit {
  @Input('mouse-over-color') color: string = 'red';
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit(): void {
  }

  @HostListener('mouseover')
  OnMouseOver(){
    this.renderer.setStyle(this.el.nativeElement, 'background', this.color);
  }

  @HostListener('mouseleave')
  OnMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement, 'background', '');
  }
}
