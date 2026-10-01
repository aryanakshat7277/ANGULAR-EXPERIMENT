import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 15px;">
      <h3>Live Users via HttpClient Observable</h3>
      <ul>
        <li *ngFor="let user of users">{{ user.name }} ({{ user.email }})</li>
      </ul>
    </div>
  `
})
export class Student implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
