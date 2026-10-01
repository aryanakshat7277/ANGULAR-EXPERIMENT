import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Student],
  templateUrl: './parent.html'
})
export class Parent {
  name = 'Manoj Kumar Padhi';
  msg = '';

  receive(m: string) {
    this.msg = m;
  }
}
