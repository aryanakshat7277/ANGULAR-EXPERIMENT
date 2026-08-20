import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = true;

  getUser() {
    return { name: 'Manoj Kumar', role: 'admin' };
  }
}
