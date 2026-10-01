import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  template: `
    <div style="background: #e8f5e9; padding: 10px; border-left: 4px solid #4caf50;">
      <h4>Exam Results</h4>
      <p>Status: Passed with Distinction (Grade: A+)</p>
    </div>
  `
})
export class Result {}
