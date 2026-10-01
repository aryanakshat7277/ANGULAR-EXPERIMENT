import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  template: `
    <div style="border: 1px solid #28a745; padding: 15px; margin: 10px 0; border-radius: 6px;">
      <h3>Course Feature Component</h3>
      <p>Course: Angular 22 Full Stack</p>
      <p>Code: CUST1052</p>
    </div>
  `
})
export class Course {}
