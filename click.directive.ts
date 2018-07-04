import { Directive,HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
@HostBinding('class.selected')
  private hostSelected = false;

  @HostListener('click')
  private onClick() {
    this.hostSelected = !this.hostSelected;
  }
  constructor() { }

}
