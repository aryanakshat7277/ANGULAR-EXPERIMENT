import { Component, ViewChild } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Student],
  templateUrl: './parent.html'
})
export class Parent {
  @ViewChild(Student) student!: Student;

  callChild() {
    this.student.send();
  }
}
