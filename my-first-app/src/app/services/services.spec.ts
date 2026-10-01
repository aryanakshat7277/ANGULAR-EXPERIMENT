import { TestBed } from '@angular/core/testing';
import { StudentService } from './student.service';
import { CounterService } from './counter.service';
import { AppStateService } from './app-state.service';
import { DataService } from './data.service';

describe('Application Services (Modules 4 & 5)', () => {
  it('StudentService should return student info (Exp 5.1)', () => {
    TestBed.configureTestingModule({ providers: [StudentService] });
    const service = TestBed.inject(StudentService);
    expect(service.getStudentName()).toBe('Manoj Kumar Padhi');
    expect(service.getCourse()).toBe('Angular');
  });

  it('CounterService should behave as a singleton and increment (Exp 5.2)', () => {
    TestBed.configureTestingModule({ providers: [CounterService] });
    const service1 = TestBed.inject(CounterService);
    const service2 = TestBed.inject(CounterService);
    expect(service1.count).toBe(0);
    service1.increment();
    expect(service2.count).toBe(1);
  });

  it('AppStateService should manage signal state (Exp 5.4)', () => {
    TestBed.configureTestingModule({ providers: [AppStateService] });
    const service = TestBed.inject(AppStateService);
    expect(service.loggedInUser()).toBe('Manoj Kumar Padhi');
    service.updateUser('Dr. Manoj Kumar Padhi');
    expect(service.loggedInUser()).toBe('Dr. Manoj Kumar Padhi');
  });

  it('DataService should provide reactive BehaviorSubject stream (Exp 4.10)', async () => {
    TestBed.configureTestingModule({ providers: [DataService] });
    const service = TestBed.inject(DataService);
    service.change('Updated Sibling Value');
    const value = await new Promise(resolve => service.current.subscribe(resolve));
    expect(value).toBe('Updated Sibling Value');
  });
});
