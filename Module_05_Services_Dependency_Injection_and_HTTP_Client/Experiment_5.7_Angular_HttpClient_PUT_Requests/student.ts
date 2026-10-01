import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 15px;">
      <h3>Update User (HTTP PUT)</h3>
      <button (click)="updateDemoUser()">Update User #1</button>
      <p *ngIf="updatedUser">Updated: {{ updatedUser.name }}</p>
    </div>
  `
})
export class Student {
  updatedUser: any = null;

  constructor(private userService: UserService) {}

  updateDemoUser() {
    this.userService.updateUser(1, { name: 'Manoj Kumar Padhi (Updated)' }).subscribe(res => {
      this.updatedUser = res;
      console.log('Updated:', res);
    });
  }
}
