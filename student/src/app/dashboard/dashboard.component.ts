import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-student-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border: 1px solid #ccc; padding: 8px; margin-top: 6px; background: #fafafa;">
      <strong>Student Child:</strong> {{ name }}
      <button (click)="select.emit(name)" style="margin-left: 8px; cursor: pointer;">Select Student</button>
    </div>
  `
})
export class DashboardStudentChildComponent {
  @Input() name: string = '';
  @Output() select = new EventEmitter<string>();
}

@Component({
  selector: 'app-dashboard-course-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border: 1px solid #ccc; padding: 8px; margin-top: 6px; background: #fafafa;">
      <strong>Course Child:</strong> {{ title }}
      <button (click)="select.emit(title)" style="margin-left: 8px; cursor: pointer;">Select Course</button>
    </div>
  `
})
export class DashboardCourseChildComponent {
  @Input() title: string = '';
  @Output() select = new EventEmitter<string>();
}

@Component({
  selector: 'app-dashboard-result-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border: 1px solid #ccc; padding: 8px; margin-top: 6px; background: #f0f4f8;">
      <strong>Result Child Display:</strong> Selected {{ studentName }} for {{ courseTitle }}
    </div>
  `
})
export class DashboardResultChildComponent {
  @Input() studentName: string = '';
  @Input() courseTitle: string = '';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DashboardStudentChildComponent,
    DashboardCourseChildComponent,
    DashboardResultChildComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  selectedStudent: string = 'Priya Sharma';
  selectedCourse: string = 'Angular Architecture';

  onStudentSelected(s: string): void {
    this.selectedStudent = s;
  }

  onCourseSelected(c: string): void {
    this.selectedCourse = c;
  }
}
