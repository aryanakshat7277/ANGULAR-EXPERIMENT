import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/invalid-endpoint';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url).pipe(
      catchError(err => {
        console.error('API Error:', err.message);
        return throwError(() => err);
      })
    );
  }
}
