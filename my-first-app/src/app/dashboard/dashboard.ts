import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student/student';
import { Course } from '../course/course';
import { Result } from '../result/result';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Student, Course, Result],
  templateUrl: './dashboard.html'
})
export class Dashboard {}
