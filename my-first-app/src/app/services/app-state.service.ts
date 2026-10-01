import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  loggedInUser = signal('Manoj Kumar Padhi');

  updateUser(name: string) {
    this.loggedInUser.set(name);
  }
}
