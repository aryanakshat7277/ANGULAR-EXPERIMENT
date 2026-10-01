import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-sibling-b',
  standalone: true,
  template: `
    <div style="padding: 10px; border: 1px solid #e91e63;">
      <h4>Sibling B</h4>
      <p>Current Shared Value: <strong>{{ value }}</strong></p>
    </div>
  `
})
export class SiblingB implements OnInit, OnDestroy {
  value = '';
  sub!: Subscription;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.sub = this.service.current.subscribe(v => this.value = v);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
