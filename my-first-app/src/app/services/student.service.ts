import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StudentService {
  getStudentName(): string {
    return 'Manoj Kumar Padhi';
  }

  getCourse(): string {
    return 'Angular';
  }
}
