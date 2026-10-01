import { TestBed } from '@angular/core/testing';
import { Result } from './result';

describe('Result Component (Module 6)', () => {
  it('should create Result component and hold marks (Exp 6.5)', () => {
    const fixture = TestBed.createComponent(Result);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
    expect(component.marks).toBe(95);
    expect(component.grade).toBe('A+');
  });
});
