import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  isLoggedIn = true;
  isActive = true;
  students = ['Manoj', 'Rahul', 'Anita', 'Priya'];
}
