import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-demo',
  standalone: true,
  template: `
    <div style="padding: 15px; border: 1px solid #673ab7;">
      <h3>Programmatic Navigation</h3>
      <button (click)="goToCourse()">Navigate to Course via Code</button>
      <button (click)="goToStudentWithQuery()">Navigate to Student with QueryParams</button>
    </div>
  `
})
export class NavDemo {
  constructor(private router: Router) {}

  goToCourse() {
    this.router.navigate(['/course']);
  }

  goToStudentWithQuery() {
    this.router.navigate(['/student'], { queryParams: { mode: 'details', id: 101 } });
  }
}
