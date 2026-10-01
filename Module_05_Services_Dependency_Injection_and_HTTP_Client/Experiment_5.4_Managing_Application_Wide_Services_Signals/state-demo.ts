import { Component } from '@angular/core';
import { AppStateService } from './app-state.service';

@Component({
  selector: 'app-state-demo',
  standalone: true,
  template: `
    <div style="padding: 15px; border: 1px solid #607d8b;">
      <h3>App State Service with Signals</h3>
      <p>Logged in user: <strong>{{ appState.loggedInUser() }}</strong></p>
      <button (click)="appState.updateUser('Prof. Manoj Kumar Padhi')">Update Signal</button>
    </div>
  `
})
export class StateDemo {
  constructor(public appState: AppStateService) {}
}
