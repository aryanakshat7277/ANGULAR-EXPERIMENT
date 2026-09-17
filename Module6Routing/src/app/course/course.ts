import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course {
  courseName = 'Advanced Angular 22 & TypeScript';
  instructor = 'Manoj Kumar Padhi';
  duration = '8 Weeks';
}
