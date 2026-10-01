import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.html'
})
export class Student {
  name = '';
  course = '';

  constructor(private studentService: StudentService) {
    this.name = this.studentService.getStudentName();
    this.course = this.studentService.getCourse();
  }
}
