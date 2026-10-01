import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { Parent } from './parent';

describe('Parent Component (Module 4)', () => {
  it('should create Parent component and receive child data (Exp 4.1, 4.2)', () => {
    TestBed.configureTestingModule({
      imports: [Parent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    });

    const fixture = TestBed.createComponent(Parent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();

    component.receive('Hello Parent Test');
    expect(component.msg).toBe('Hello Parent Test');

    component.handleScore(95);
    expect(component.childScore).toBe(95);
  });
});
