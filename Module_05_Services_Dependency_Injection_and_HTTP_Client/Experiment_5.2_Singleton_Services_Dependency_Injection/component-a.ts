import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-component-a',
  standalone: true,
  template: `
    <div style="border:1px solid #3f51b5; padding: 10px;">
      <h4>Component A (Singleton Consumer)</h4>
      <p>Shared Count: {{ counter.count }}</p>
      <button (click)="counter.increment()">Increment in A</button>
    </div>
  `
})
export class ComponentA {
  constructor(public counter: CounterService) {}
}
