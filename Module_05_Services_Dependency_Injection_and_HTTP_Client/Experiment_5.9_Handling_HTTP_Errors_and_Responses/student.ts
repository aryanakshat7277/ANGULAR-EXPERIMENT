import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 15px;">
      <h3>HTTP Error Handling</h3>
      <button (click)="triggerError()">Simulate Error Request</button>
      <p *ngIf="errorMessage" style="color: red;">Caught: {{ errorMessage }}</p>
    </div>
  `
})
export class Student {
  errorMessage = '';

  constructor(private userService: UserService) {}

  triggerError() {
    this.userService.getUsers().subscribe({
      next: () => {},
      error: err => {
        this.errorMessage = 'Friendly Error: Failed to fetch data (' + err.status + ')';
      }
    });
  }
}
