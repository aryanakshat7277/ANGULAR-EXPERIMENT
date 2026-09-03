import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  id = Math.random();

  getId(): number {
    return this.id;
  }
}
