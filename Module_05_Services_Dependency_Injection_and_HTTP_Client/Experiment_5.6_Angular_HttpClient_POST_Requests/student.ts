import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 15px;">
      <h3>Create User (HTTP POST)</h3>
      <button (click)="createDemoUser()">Send POST Request</button>
      <p *ngIf="createdUser">Created User ID: {{ createdUser.id }} - {{ createdUser.name }}</p>
    </div>
  `
})
export class Student {
  createdUser: any = null;

  constructor(private userService: UserService) {}

  createDemoUser() {
    this.userService.addUser({ name: 'Manoj Kumar Padhi', email: 'manoj@example.com' }).subscribe(res => {
      this.createdUser = res;
      console.log('Created:', res);
    });
  }
}
