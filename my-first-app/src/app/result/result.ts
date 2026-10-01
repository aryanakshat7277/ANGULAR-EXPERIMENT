import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result {
  marks = 95;
  grade = 'A+';
  status = 'Pass with Distinction';
}
