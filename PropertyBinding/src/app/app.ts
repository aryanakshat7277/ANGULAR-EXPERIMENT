import { Component } from '@angular/core';
import { PropertyBindingDemoComponent } from './property-binding-demo/property-binding-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PropertyBindingDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}