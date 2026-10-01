import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div style="border: 1px solid #1976d2; padding: 15px;">
      <h2>Student Overview</h2>
      <a routerLink="result" style="color: blue; font-weight: bold;">View Result</a>
      <div style="margin-top: 15px;">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class Student {}
