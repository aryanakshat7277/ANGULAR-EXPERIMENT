import { Component, Input, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  @Input() studentName: string = '';
  @Output() notify = new EventEmitter<string>();

  @Output() score = new EventEmitter<number>();
  marks: number = 95;

  @Input() course: string = 'Angular';
  @Output() courseChanged = new EventEmitter<string>();

  @ContentChild('content') projectedContent!: ElementRef;

  send(): void {
    this.notify.emit('Hello Parent');
  }

  sendMarks(): void {
    this.score.emit(this.marks);
  }

  change(): void {
    this.courseChanged.emit('Advanced Angular');
  }
}
