import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[MiDirectiva]'
})
export class MiDirectivaDirective {

  constructor(
    public el: ElementRef,
    public renderer: Renderer2
  ) { }

  @Input() color: string
  @Input() underline: boolean

/*   ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', this.underline ? 'underline' : "")
  } */

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true)
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false)
  }

  //El hover sirve para que al pasar el puntero por la letra, cambie de color
  hover(color: boolean): void {
    if (color) {
      this.renderer.setStyle(this.el.nativeElement, 'color', "red")
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', "")
    }
  }

/*  @Input() MiDirectiva: boolean
     ngOnInit() {
      if (this.MiDirectiva) {
        this.renderer.setStyle(this.el.nativeElement, 'color', "red")
      }
    } */
}
