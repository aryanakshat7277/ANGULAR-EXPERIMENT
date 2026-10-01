import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  name = 'Manoj Kumar Padhi';
  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
  isDisabled = false;
  website = 'https://angular.dev';
  placeholderText = 'Enter your name';
}
