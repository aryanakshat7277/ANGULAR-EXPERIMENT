import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  template: `
    <div style="border: 1px solid #007acc; padding: 15px; margin: 10px 0; border-radius: 6px;">
      <h3>Student Feature Component</h3>
      <p>Name: Manoj Kumar Padhi</p>
      <p>Role: Undergraduate Student</p>
    </div>
  `
})
export class Student {}
