import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 15px; border: 1px solid #e91e63;">
      <h3>RxJS Error Handling with catchError</h3>
      <p>Stream Outcome: {{ result }}</p>
    </div>
  `
})
export class Student implements OnInit {
  result = '';

  ngOnInit() {
    throwError(() => new Error('Stream failed'))
      .pipe(
        catchError(err => of('Recovered: ' + err.message))
      )
      .subscribe(v => {
        this.result = v;
        console.log(v);
      });
  }
}
