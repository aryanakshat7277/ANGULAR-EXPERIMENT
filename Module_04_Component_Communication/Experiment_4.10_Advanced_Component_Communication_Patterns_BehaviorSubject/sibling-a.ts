import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling-a',
  standalone: true,
  template: `
    <div style="padding: 10px; border: 1px solid #00bcd4;">
      <h4>Sibling A</h4>
      <input #newVal placeholder="Enter new message">
      <button (click)="service.change(newVal.value)">Update Shared State</button>
    </div>
  `
})
export class SiblingA {
  constructor(public service: DataService) {}
}
