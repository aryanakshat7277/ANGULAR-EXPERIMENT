import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 15px; border: 1px solid #ff5722;">
      <h3>Combining Observables with forkJoin</h3>
      <p>Combined Result: {{ combinedResult | json }}</p>
    </div>
  `
})
export class Student implements OnInit {
  combinedResult: any;

  ngOnInit() {
    forkJoin({
      name: of('Manoj Kumar Padhi'),
      course: of('Angular')
    }).subscribe(result => {
      this.combinedResult = result;
      console.log(result);
    });
  }
}
