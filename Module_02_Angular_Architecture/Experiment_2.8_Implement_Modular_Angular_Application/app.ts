import { Component } from '@angular/core';
import { Student } from './student/student';
import { Course } from './course/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Student, Course],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
