import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="border: 1px solid #4caf50; padding: 12px; margin: 10px 0;">
      <h4>Current Course: {{ course }}</h4>
      <button (click)="change()">Upgrade Course</button>
    </div>
  `
})
export class Student {
  @Input() course = 'Angular';
  @Output() courseChanged = new EventEmitter<string>();

  change() {
    this.courseChanged.emit('Advanced Angular');
  }
}
