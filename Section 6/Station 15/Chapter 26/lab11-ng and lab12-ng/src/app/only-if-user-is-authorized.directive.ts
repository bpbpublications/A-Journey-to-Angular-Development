import {
  ComponentFactoryResolver,
  Directive,
  DoCheck,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { CustomMessageComponent } from './custom-message/custom-message.component';

@Directive({
  selector: '[appOnlyIfUserIsAuthorized]',
})
export class OnlyIfUserIsAuthorizedDirective implements DoCheck {
  // constructor(
  //   private ele: ElementRef,
  //   private renderer: Renderer2,
  // ) {}
  constructor(
    private vc: ViewContainerRef,
    private tc: TemplateRef<any>,
    private resolver: ComponentFactoryResolver
  ) {}

  // ngDoCheck(): void {
  // const isAuthorized = true;
  // if (localStorage.IsAuthorized !== 'true') {
  //   const pNode = this.renderer.createElement('div');
  //   const txtNode = this.renderer.createText('Not authorized!!!');

  //   this.renderer.appendChild(pNode, txtNode);
  //   this.renderer.appendChild(this.ele.nativeElement.parentElement, pNode);
  //   this.renderer.removeChild(this.ele.nativeElement.parentElement, this.ele.nativeElement);
  // }
  //}

  IsViewCreated = false;
  ngDoCheck(): void {
    const isAuthorized = true;
    if (localStorage.IsAuthorized !== 'true' && this.IsViewCreated) {
      this.vc.clear();
      const MessageComponentFactory = this.resolver.resolveComponentFactory(
        CustomMessageComponent
      );
      const MessageComponent = this.vc.createComponent(MessageComponentFactory);
      MessageComponent.instance.Message = 'Not Authorized!!!';
      this.IsViewCreated = false;
    } else if (localStorage.IsAuthorized !== 'false' && !this.IsViewCreated) {
      this.vc.clear();
      this.vc.createEmbeddedView(this.tc);
      this.IsViewCreated = true;
    }
  }
}
