import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Student],
  template: `
    <div style="padding: 20px; border: 2px solid #555;">
      <h2>Parent Score Receiver</h2>
      <app-student (score)="result=$event"></app-student>
      <p><strong>Marks Received:</strong> {{ result }}</p>
    </div>
  `
})
export class Parent {
  result: number = 0;
}
