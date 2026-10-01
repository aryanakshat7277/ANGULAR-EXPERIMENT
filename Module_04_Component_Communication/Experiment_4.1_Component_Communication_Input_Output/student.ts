import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.html'
})
export class Student {
  @Input() studentName = '';
  @Output() notify = new EventEmitter<string>();

  send() {
    this.notify.emit('Hello Parent');
  }
}
