import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  template: `
    <div style="border: 1px solid #ddd; padding: 12px; background: #fafafa; border-radius: 4px;">
      <p><strong>Count: {{ value }}</strong></p>
      <button (click)="increment.emit()" style="padding: 4px 10px; margin-right: 6px; cursor: pointer;">+</button>
      <button (click)="decrement.emit()" style="padding: 4px 10px; cursor: pointer;">-</button>
    </div>
  `
})
export class CounterDisplayComponent {
  @Input() value: number = 0;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
}
