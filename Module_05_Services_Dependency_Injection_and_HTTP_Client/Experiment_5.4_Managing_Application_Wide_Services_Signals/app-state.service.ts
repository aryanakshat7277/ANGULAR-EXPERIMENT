import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  loggedInUser = signal('Manoj Kumar Padhi');

  updateUser(newUser: string) {
    this.loggedInUser.set(newUser);
  }
}
