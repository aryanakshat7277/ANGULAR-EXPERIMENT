import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 15px;">
      <button (click)="addUser()">Create User with RxJS Tap</button>
      <p *ngIf="status">{{ status }}</p>
    </div>
  `
})
export class Student {
  status = '';

  constructor(private userService: UserService) {}

  addUser() {
    this.userService.createUser({ name: 'Manoj Kumar Padhi', role: 'Faculty' }).subscribe(res => {
      this.status = 'User created successfully! Check console for tap() log.';
    });
  }
}
