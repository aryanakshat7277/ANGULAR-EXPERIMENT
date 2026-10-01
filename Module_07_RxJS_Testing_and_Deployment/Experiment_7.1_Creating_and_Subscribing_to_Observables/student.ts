import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  standalone: true,
  template: `
    <div style="padding: 15px; border: 1px solid #009688;">
      <h3>RxJS Observable Stream</h3>
      <p>Values received: {{ values.join(', ') }}</p>
    </div>
  `
})
export class Student implements OnInit {
  values: number[] = [];

  ngOnInit() {
    const numbers$ = new Observable<number>(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    });

    numbers$.subscribe(val => {
      this.values.push(val);
      console.log('Received:', val);
    });
  }
}
