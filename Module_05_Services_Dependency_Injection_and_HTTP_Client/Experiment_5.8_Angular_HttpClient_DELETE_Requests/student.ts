import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 15px;">
      <h3>Delete User (HTTP DELETE)</h3>
      <button (click)="deleteDemoUser()">Delete User #1</button>
      <p *ngIf="deletedStatus">{{ deletedStatus }}</p>
    </div>
  `
})
export class Student {
  deletedStatus = '';

  constructor(private userService: UserService) {}

  deleteDemoUser() {
    this.userService.deleteUser(1).subscribe(() => {
      this.deletedStatus = 'User 1 deleted successfully!';
    });
  }
}
