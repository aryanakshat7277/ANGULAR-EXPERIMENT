import { Component } from '@angular/core';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventBindingDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}