import { Component } from '@angular/core';
import { TwoWayDemoComponent } from './two-way-demo/two-way-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TwoWayDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}