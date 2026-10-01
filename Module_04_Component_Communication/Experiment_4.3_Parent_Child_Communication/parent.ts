import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Student],
  template: `
    <div style="border: 2px solid #2e7d32; padding: 20px;">
      <h2>Parent-Child Course Coordinator</h2>
      <app-student [course]="parentCourse" (courseChanged)="handleCourseChange($event)"></app-student>
      <p>Parent Enrolled Course: <strong>{{ parentCourse }}</strong></p>
    </div>
  `
})
export class Parent {
  parentCourse = 'Angular';

  handleCourseChange(newCourse: string) {
    this.parentCourse = newCourse;
  }
}
