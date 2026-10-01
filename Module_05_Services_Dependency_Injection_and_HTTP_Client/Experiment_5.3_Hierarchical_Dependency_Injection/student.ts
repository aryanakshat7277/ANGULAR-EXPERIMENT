import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-student',
  standalone: true,
  providers: [CounterService], // Component-level injector override
  template: `
    <div style="border: 2px solid #ff5722; padding: 15px;">
      <h3>Scoped Counter Component</h3>
      <p>Isolated Count: {{ counter.count }}</p>
      <button (click)="counter.increment()">Increment Scoped Count</button>
    </div>
  `
})
export class Student {
  constructor(public counter: CounterService) {}
}
