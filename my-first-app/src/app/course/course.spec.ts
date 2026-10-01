import { TestBed } from '@angular/core/testing';
import { Course } from './course';

describe('Course Component (Modules 2 & 6)', () => {
  it('should create Course component and load details (Exp 2.8, 6.1)', () => {
    const fixture = TestBed.createComponent(Course);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
    expect(component.courseCode).toBe('CUST1052');
    expect(component.faculty).toContain('Manoj Kumar Padhi');
    expect(component.modulesCount).toBe(7);
  });
});
