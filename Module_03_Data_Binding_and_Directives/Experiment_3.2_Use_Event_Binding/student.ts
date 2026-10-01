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
  message = 'Welcome to Angular';

  showMessage() {
    alert('Welcome to Angular Event Binding!');
  }

  changeMessage() {
    this.message = 'Event Binding Executed Successfully!';
  }
}
