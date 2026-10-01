import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private msg = new BehaviorSubject('Hello from DataService');
  current = this.msg.asObservable();

  change(v: string) {
    this.msg.next(v);
  }
}
