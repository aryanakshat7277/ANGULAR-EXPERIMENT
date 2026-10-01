import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 15px; border: 1px solid #673ab7;">
      <h3>RxJS Pipeable Operators (filter & map)</h3>
      <p>Original: [1, 2, 3, 4, 5]</p>
      <p>Processed (evens * 10): {{ transformedValues.join(', ') }}</p>
    </div>
  `
})
export class Student implements OnInit {
  transformedValues: number[] = [];

  ngOnInit() {
    of(1, 2, 3, 4, 5).pipe(
      filter(n => n % 2 === 0),
      map(n => n * 10)
    ).subscribe(v => {
      this.transformedValues.push(v);
      console.log(v);
    });
  }
}
