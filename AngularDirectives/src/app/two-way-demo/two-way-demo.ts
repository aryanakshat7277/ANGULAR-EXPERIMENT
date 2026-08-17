import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-demo.html',
  styleUrl: './two-way-demo.css'
})
export class TwoWayDemoComponent {
  feedback: string = '';

  clearFeedback(): void {
    this.feedback = '';
  }
}
