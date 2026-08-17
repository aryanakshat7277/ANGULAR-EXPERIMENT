import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOverdue]',
  standalone: true
})
export class OverdueDirective implements OnInit {
  @Input() appOverdue!: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.appOverdue < new Date()) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
    }
  }
}
