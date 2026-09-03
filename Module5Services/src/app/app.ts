import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './services/message.service';
import { CounterService } from './services/counter.service';
import { LoggerService } from './services/logger.service';
import { AppStateService } from './services/app-state.service';
import { StudentService, Student } from './services/student.service';

export type Module5Tab = '5.1' | '5.2' | '5.3' | '5.4' | '5.5' | '5.6' | '5.7';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  providers: [LoggerService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular Module 5: Services & HttpClient (Experiments 5.1 - 5.7)';
  activeTab: Module5Tab = '5.1';

  // Exp 5.1: Injecting Simple Service
  private messageService = inject(MessageService);
  message = this.messageService.getMessage();

  // Exp 5.2: Singleton Service with DI
  counter = inject(CounterService);

  // Exp 5.3: Hierarchical DI Logger Service
  logger = inject(LoggerService);

  // Exp 5.4: Application-Wide Service State
  state = inject(AppStateService);

  // Exp 5.5 - 5.7: StudentService (HttpClient GET, POST, PUT)
  private studentService = inject(StudentService);
  students: Student[] = [];
  getLoading: boolean = false;
  getLoaded: boolean = false;

  // Exp 5.6: POST state
  postResult: any = null;
  postLoading: boolean = false;
  newStudent = {
    name: 'Rahul Kumar',
    email: 'rahul@example.com'
  };

  // Exp 5.7: PUT state
  putResult: any = null;
  putLoading: boolean = false;
  updatedStudent = {
    name: 'Rahul Kumar Updated',
    email: 'rahul.updated@example.com'
  };

  selectTab(tab: Module5Tab): void {
    this.activeTab = tab;
  }

  // Exp 5.5: GET handler
  loadStudents(): void {
    this.getLoading = true;
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        this.getLoading = false;
        this.getLoaded = true;
      },
      error: (err) => {
        console.error('GET Error:', err);
        this.getLoading = false;
      }
    });
  }

  // Exp 5.6: POST handler
  addStudent(): void {
    this.postLoading = true;
    this.studentService.createStudent(this.newStudent).subscribe({
      next: (data) => {
        console.log('Created:', data);
        this.postResult = data;
        this.postLoading = false;
      },
      error: (err) => {
        console.error('POST Error:', err);
        this.postLoading = false;
      }
    });
  }

  // Exp 5.7: PUT handler
  updateStudent(): void {
    this.putLoading = true;
    this.studentService.updateStudent(1, this.updatedStudent).subscribe({
      next: (data) => {
        console.log('Updated:', data);
        this.putResult = data;
        this.putLoading = false;
      },
      error: (err) => {
        console.error('PUT Error:', err);
        this.putLoading = false;
      }
    });
  }
}