import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  name = 'Manoj Kumar Padhi';
  subject = 'Angular 22 Routing & Navigation';
  college = 'Centurion University';
  semester = 5;
}
