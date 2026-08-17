import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  standalone: true,
  templateUrl: './event-binding-demo.html',
  styleUrl: './event-binding-demo.css'
})
export class EventBindingDemoComponent {
  clickCount: number = 0;
  lastKey: string = '';

  onButtonClick(): void {
    this.clickCount++;
  }

  onKeyUp(event: KeyboardEvent): void {
    this.lastKey = event.key;
  }
}
