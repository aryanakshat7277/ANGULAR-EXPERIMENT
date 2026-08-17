import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // RxJS BehaviorSubject implementation
  private msgSubject = new BehaviorSubject<string>('Hello from DataService');
  current$ = this.msgSubject.asObservable();

  // Angular 22 Signals implementation
  reactiveSignal = signal<string>('Initial Signal Message');

  changeMessage(v: string): void {
    this.msgSubject.next(v);
  }

  updateSignal(v: string): void {
    this.reactiveSignal.set(v);
  }
}
