import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student/student';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, Student],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  name: string = 'Manoj Kumar Padhi';
  msg: string = '';
  result: number | null = null;
  currentCourse: string = 'Angular';

  @ViewChild(Student) studentComponent!: Student;

  receive(m: string): void {
    this.msg = m;
  }

  handleScore(s: number): void {
    this.result = s;
  }

  handleCourseChange(newCourse: string): void {
    this.currentCourse = newCourse;
  }

  callChild(): void {
    if (this.studentComponent) {
      this.studentComponent.send();
    }
  }
}
