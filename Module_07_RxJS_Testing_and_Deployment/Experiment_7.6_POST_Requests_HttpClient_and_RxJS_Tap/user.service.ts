import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  createUser(newUser: any) {
    return this.http.post(this.url, newUser).pipe(
      tap(res => console.log('Created:', res))
    );
  }
}
