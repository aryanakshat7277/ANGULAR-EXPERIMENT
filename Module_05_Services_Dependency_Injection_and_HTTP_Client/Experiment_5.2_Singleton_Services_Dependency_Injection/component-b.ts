import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-component-b',
  standalone: true,
  template: `
    <div style="border:1px solid #e91e63; padding: 10px;">
      <h4>Component B (Singleton Consumer)</h4>
      <p>Shared Count: {{ counter.count }}</p>
      <button (click)="counter.increment()">Increment in B</button>
    </div>
  `
})
export class ComponentB {
  constructor(public counter: CounterService) {}
}
