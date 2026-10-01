import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 10px; border: 1px solid #ff9800;">
      <h4>Student Score Emitter</h4>
      <p>Current Marks: {{ marks }}</p>
      <button (click)="sendMarks()">Emit Score</button>
    </div>
  `
})
export class Student {
  @Output() score = new EventEmitter<number>();
  marks = 95;

  sendMarks() {
    this.score.emit(this.marks);
  }
}
