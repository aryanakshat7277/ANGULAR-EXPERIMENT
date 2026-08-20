import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  template: `<div style="border: 1px solid #ccc; padding: 10px; background: #fafafa;">
    <h4>Student List Feature Component</h4>
    <p>Loaded lazily or eagerly within features/student</p>
  </div>`
})
export class StudentListComponent {}
