import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Highlight } from '../highlight';
import { StudentService } from '../services/student.service';
import { CounterService } from '../services/counter.service';
import { AppStateService } from '../services/app-state.service';
import { UserService, User } from '../services/user.service';
import { Observable, of, forkJoin, throwError } from 'rxjs';
import { map, filter, catchError, tap } from 'rxjs/operators';

interface StudentRecord {
  name: string;
  marks: number;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet, Highlight],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student implements OnInit, OnDestroy, AfterContentInit {
  // Module 1 & 3: Properties & Interpolation
  @Input() studentName: string = 'Manoj Kumar Padhi';
  name = 'Manoj Kumar Padhi';
  subject = 'Angular';
  college = 'Centurion University';
  semester = 5;
  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
  isDisabled = false;
  website = 'https://angular.dev';
  placeholderText = 'Enter your name';
  message = 'Welcome to Angular';

  // Directives
  isLoggedIn = true;
  isActive = true;
  students = ['Manoj', 'Rahul', 'Anita', 'Priya'];

  records: StudentRecord[] = [
    { name: 'Manoj', marks: 92 },
    { name: 'Rahul', marks: 38 },
    { name: 'Anita', marks: 76 }
  ];

  // Component Communication (@Output)
  @Output() notify = new EventEmitter<string>();
  @Output() score = new EventEmitter<number>();
  @Input() course = 'Angular';
  @Output() courseChanged = new EventEmitter<string>();

  // RxJS & HTTP data
  users: User[] = [];
  rxjsLogs: string[] = [];
  httpStatus = '';

  @ContentChild('content') projectedContent!: ElementRef;

  constructor(
    private studentService: StudentService,
    public counterService: CounterService,
    public appState: AppStateService,
    private userService: UserService
  ) {
    console.log('1. Constructor called');
  }

  ngOnInit(): void {
    console.log('2. ngOnInit called - component initialised');
    // Fetch users via HttpClient
    this.userService.getUsers().subscribe({
      next: (data) => this.users = data.slice(0, 5),
      error: (err) => console.error('Users fetch error:', err)
    });

    // RxJS Demos (7.1, 7.2, 7.3, 7.4)
    this.runRxJSDemos();
  }

  ngAfterContentInit(): void {
    if (this.projectedContent) {
      console.log('Projected content present in Student Component');
    }
  }

  ngOnDestroy(): void {
    console.log('3. ngOnDestroy called - component removed');
  }

  // Event Binding methods (Exp 3.2)
  showMessage() {
    alert('Welcome to Angular Event Binding!');
  }

  changeMessage() {
    this.message = 'Event Binding Executed Successfully!';
  }

  send() {
    this.notify.emit('Hello Parent');
  }

  sendMarks() {
    this.score.emit(95);
  }

  changeCourse() {
    this.course = 'Advanced Angular';
    this.courseChanged.emit(this.course);
  }

  runRxJSDemos() {
    // 7.1 Observable
    const numbers$ = new Observable<number>(sub => {
      sub.next(1); sub.next(2); sub.next(3); sub.complete();
    });
    numbers$.subscribe(v => this.rxjsLogs.push(`7.1 Observable Emitted: ${v}`));

    // 7.2 Pipe operators
    of(1, 2, 3, 4, 5).pipe(
      filter(n => n % 2 === 0),
      map(n => n * 10)
    ).subscribe(v => this.rxjsLogs.push(`7.2 Transformed Value: ${v}`));

    // 7.3 forkJoin
    forkJoin({
      name: of('Manoj Kumar Padhi'),
      course: of('Angular')
    }).subscribe(res => this.rxjsLogs.push(`7.3 forkJoin: ${res.name} - ${res.course}`));

    // 7.4 catchError
    throwError(() => new Error('Stream failed')).pipe(
      catchError(err => of('Recovered: ' + err.message))
    ).subscribe(v => this.rxjsLogs.push(`7.4 Error Recovery: ${v}`));
  }

  addNewUser() {
    this.userService.addUser({ name: 'Manoj Kumar Padhi', email: 'manoj@cutm.ac.in' }).subscribe(res => {
      this.httpStatus = `User added successfully with ID: ${res.id}`;
    });
  }
}
