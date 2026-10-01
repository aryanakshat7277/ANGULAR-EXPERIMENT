import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-card',
  standalone: true,
  template: `<div style="padding:10px; border:1px solid #1976d2;">Student: Manoj Kumar Padhi</div>`
})
export class StudentChild {}

@Component({
  selector: 'app-course-card',
  standalone: true,
  template: `<div style="padding:10px; border:1px solid #388e3c;">Course: Angular 22 Complete Lab</div>`
})
export class CourseChild {}

@Component({
  selector: 'app-result-card',
  standalone: true,
  template: `<div style="padding:10px; border:1px solid #f57c00;">Result: Grade A+ (Marks: 95)</div>`
})
export class ResultChild {}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StudentChild, CourseChild, ResultChild],
  template: `
    <div style="padding: 20px; font-family: Arial, sans-serif;">
      <h2>Integrated Academic Dashboard (Parent)</h2>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 15px;">
        <app-student-card></app-student-card>
        <app-course-card></app-course-card>
        <app-result-card></app-result-card>
      </div>
    </div>
  `
})
export class Dashboard {}
