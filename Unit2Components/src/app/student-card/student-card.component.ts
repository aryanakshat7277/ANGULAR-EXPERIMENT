import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true,
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() name: string = '';
  @Input() marks: number[] = [];

  get average(): number {
    return this.marks.length
      ? this.marks.reduce((a, b) => a + b, 0) / this.marks.length
      : 0;
  }
}
