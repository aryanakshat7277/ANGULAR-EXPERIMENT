import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  appName = 'Student Management System';
  user = 'Admin';

  welcome(): string {
    return `Welcome ${this.user}`;
  }
}
