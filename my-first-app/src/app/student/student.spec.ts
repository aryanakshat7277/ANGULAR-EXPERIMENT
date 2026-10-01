import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Student } from './student';
import { StudentService } from '../services/student.service';
import { CounterService } from '../services/counter.service';
import { AppStateService } from '../services/app-state.service';
import { UserService } from '../services/user.service';

describe('Student Component (Modules 1, 2, 3, 4, 7)', () => {
  let fixture: ComponentFixture<Student>;
  let component: Student;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Student],
      providers: [
        StudentService,
        CounterService,
        AppStateService,
        UserService,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Student);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Student component (Exp 2.1)', () => {
    expect(component).toBeTruthy();
  });

  it('should bind interpolation data correctly (Exp 3.0)', () => {
    expect(component.name).toBe('Manoj Kumar Padhi');
    expect(component.subject).toBe('Angular');
    expect(component.college).toBe('Centurion University');
    expect(component.semester).toBe(5);
  });

  it('should handle event binding to change message (Exp 3.2)', () => {
    component.changeMessage();
    expect(component.message).toBe('Event Binding Executed Successfully!');
  });

  it('should emit message to parent via @Output notify (Exp 4.1)', async () => {
    const notifyPromise = firstValueFrom(component.notify);
    component.send();
    const msg = await notifyPromise;
    expect(msg).toBe('Hello Parent');
  });

  it('should emit numeric score to parent via @Output score (Exp 4.2)', async () => {
    const scorePromise = firstValueFrom(component.score);
    component.sendMarks();
    const score = await scorePromise;
    expect(score).toBe(95);
  });

  it('should render student gradebook records with pass/fail (Exp 3.9)', () => {
    expect(component.records.length).toBe(3);
    const passStudent = component.records.find(r => r.marks >= 40);
    const failStudent = component.records.find(r => r.marks < 40);
    expect(passStudent).toBeDefined();
    expect(failStudent).toBeDefined();
    expect(failStudent?.name).toBe('Rahul');
  });

  it('should execute RxJS stream demos (Exp 7.1, 7.2, 7.3, 7.4)', () => {
    expect(component.rxjsLogs.length).toBeGreaterThan(0);
    expect(component.rxjsLogs.some(l => l.includes('7.1 Observable Emitted: 1'))).toBe(true);
    expect(component.rxjsLogs.some(l => l.includes('7.2 Transformed Value: 20'))).toBe(true);
    expect(component.rxjsLogs.some(l => l.includes('7.3 forkJoin: Manoj Kumar Padhi - Angular'))).toBe(true);
    expect(component.rxjsLogs.some(l => l.includes('7.4 Error Recovery: Recovered: Stream failed'))).toBe(true);
  });
});
