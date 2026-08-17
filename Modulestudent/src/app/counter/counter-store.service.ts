import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterStore {
  private countSubject = new BehaviorSubject<number>(0);
  readonly count$ = this.countSubject.asObservable();

  increment(): void {
    this.countSubject.next(this.countSubject.value + 1);
  }

  decrement(): void {
    this.countSubject.next(this.countSubject.value - 1);
  }
}
