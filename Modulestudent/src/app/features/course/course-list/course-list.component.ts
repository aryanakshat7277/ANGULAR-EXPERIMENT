import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  template: `<div style="border: 1px solid #ccc; padding: 10px; background: #fafafa;">
    <h4>Course List Feature Component</h4>
    <p>Loaded lazily via router chunk (course-list works!)</p>
  </div>`
})
export class CourseListComponent {}
