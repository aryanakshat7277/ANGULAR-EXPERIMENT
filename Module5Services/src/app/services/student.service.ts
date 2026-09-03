import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  id?: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class StudentService {
  private http = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/users';

  // Exp 5.5: GET Request
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  // Exp 5.6: POST Request
  createStudent(student: any): Observable<any> {
    return this.http.post(this.url, student);
  }

  // Exp 5.7: PUT Request
  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, student);
  }
}
