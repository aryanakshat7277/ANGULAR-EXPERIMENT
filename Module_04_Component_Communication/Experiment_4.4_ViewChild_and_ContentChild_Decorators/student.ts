import { Component, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 12px; border: 1px dotted #9c27b0;">
      <h4>Student Child Component</h4>
      <ng-content></ng-content>
      <p>Status: {{ status }}</p>
    </div>
  `
})
export class Student implements AfterContentInit {
  status = 'Active';

  @ContentChild('content') projectedContent!: ElementRef;

  send() {
    this.status = 'Invoked via @ViewChild from Parent!';
    console.log('Student send() invoked directly from parent component.');
  }

  ngAfterContentInit() {
    if (this.projectedContent) {
      console.log('Projected content detected:', this.projectedContent.nativeElement.textContent);
    }
  }
}
