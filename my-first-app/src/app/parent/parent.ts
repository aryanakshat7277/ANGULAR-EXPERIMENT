import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student/student';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, Student],
  templateUrl: './parent.html'
})
export class Parent {
  name = 'Manoj Kumar Padhi';
  msg = '';
  childScore = 0;
  parentCourse = 'Angular 22';

  @ViewChild(Student) studentComponent!: Student;

  receive(m: string) {
    this.msg = m;
  }

  handleScore(score: number) {
    this.childScore = score;
  }

  handleCourseChange(c: string) {
    this.parentCourse = c;
  }

  callChildMethod() {
    if (this.studentComponent) {
      this.studentComponent.showMessage();
    }
  }
}
