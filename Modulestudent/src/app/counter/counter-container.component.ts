import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { CounterDisplayComponent } from './counter-display.component';
import { CounterStore } from './counter-store.service';

@Component({
  selector: 'app-counter-container',
  standalone: true,
  imports: [CommonModule, CounterDisplayComponent, AsyncPipe],
  template: `
    <div class="demo-box">
      <h3>Experiment 2.10: Smart / Presentational Component Pattern</h3>
      <p style="font-size: 0.85rem; color: #666;">
        Unidirectional Data Flow: <code>CounterContainerComponent</code> (Smart) subscribes to <code>CounterStore</code> via <code>AsyncPipe</code>,
        passing value to <code>CounterDisplayComponent</code> (Dumb) via <code>[value]</code> property binding, while capturing <code>(increment)</code> & <code>(decrement)</code> events.
      </p>
      <app-counter-display
        [value]="(store.count$ | async) ?? 0"
        (increment)="store.increment()"
        (decrement)="store.decrement()">
      </app-counter-display>
    </div>
  `,
  styles: [`
    .demo-box {
      border: 1px solid #ccc;
      padding: 16px;
      background: #fff;
      border-radius: 4px;
    }
    .demo-box h3 { margin-top: 0; }
  `]
})
export class CounterContainerComponent {
  constructor(public store: CounterStore) {}
}
