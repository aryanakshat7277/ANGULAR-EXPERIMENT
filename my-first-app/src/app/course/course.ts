import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course {
  courseTitle = 'Angular 22 Full-Stack Lab';
  courseCode = 'CUST1052';
  department = 'Department of CSE, School of Engineering and Technology';
  faculty = 'Manoj Kumar Padhi (Course Coordinator)';
  modulesCount = 7;
  experimentsCount = 70;
}
