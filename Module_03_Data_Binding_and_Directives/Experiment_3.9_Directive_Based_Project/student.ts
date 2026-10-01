import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StudentRecord {
  name: string;
  marks: number;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  records: StudentRecord[] = [
    { name: 'Manoj', marks: 92 },
    { name: 'Rahul', marks: 38 },
    { name: 'Anita', marks: 76 }
  ];
}
