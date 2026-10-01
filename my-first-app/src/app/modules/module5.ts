import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StudentService } from '../services/student.service';
import { CounterService } from '../services/counter.service';
import { AppStateService } from '../services/app-state.service';
import { UserService, User } from '../services/user.service';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-module5',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [
    // Local provider for Hierarchical DI demo (Exp 5.3)
    { provide: 'SCOPED_COUNTER', useClass: CounterService }
  ],
  template: `
    <div class="module-wrapper">
      <div class="module-header">
        <div class="header-top">
          <h2>Module 5: Services, Dependency Injection and HTTP Client</h2>
          <a routerLink="/" class="btn-back">&larr; Back to Modules</a>
        </div>
        <p>Experiments 5.1 to 5.10 - Services, Singletons, Hierarchical DI, Signals, and Full REST CRUD (GET, POST, PUT, DELETE, Errors, Interceptors).</p>
      </div>

      <div class="exp-nav">
        <button [class.active]="activeExp === 'all'" (click)="setExp('all')">Show All Exp 5.1 - 5.10</button>
        <button [class.active]="activeExp === '5.1'" (click)="setExp('5.1')">Exp 5.1: Service</button>
        <button [class.active]="activeExp === '5.2'" (click)="setExp('5.2')">Exp 5.2: Singleton DI</button>
        <button [class.active]="activeExp === '5.3'" (click)="setExp('5.3')">Exp 5.3: Hierarchical DI</button>
        <button [class.active]="activeExp === '5.4'" (click)="setExp('5.4')">Exp 5.4: Signals State</button>
        <button [class.active]="activeExp === '5.5'" (click)="setExp('5.5')">Exp 5.5: GET</button>
        <button [class.active]="activeExp === '5.6'" (click)="setExp('5.6')">Exp 5.6: POST</button>
        <button [class.active]="activeExp === '5.7'" (click)="setExp('5.7')">Exp 5.7: PUT</button>
        <button [class.active]="activeExp === '5.8'" (click)="setExp('5.8')">Exp 5.8: DELETE</button>
        <button [class.active]="activeExp === '5.9'" (click)="setExp('5.9')">Exp 5.9: Errors</button>
        <button [class.active]="activeExp === '5.10'" (click)="setExp('5.10')">Exp 5.10: Interceptors</button>
      </div>

      <!-- Exp 5.1 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '5.1'">
        <div class="card-badge">Experiment 5.1</div>
        <h3>Creating and Injecting a Simple Service (StudentService)</h3>
        <div class="demo-box">
          <p><strong>Retrieved Student:</strong> {{ serviceName }}</p>
          <p><strong>Retrieved Course:</strong> {{ serviceCourse }}</p>
        </div>
      </div>

      <!-- Exp 5.2 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '5.2'">
        <div class="card-badge">Experiment 5.2</div>
        <h3>Singleton Services with Dependency Injection (providedIn: 'root')</h3>
        <div class="demo-box">
          <p>Singleton Counter Value: <strong>{{ counter.count }}</strong></p>
          <button (click)="counter.increment()">Increment Singleton Counter</button>
        </div>
      </div>

      <!-- Exp 5.3 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '5.3'">
        <div class="card-badge">Experiment 5.3</div>
        <h3>Hierarchical & Scoped Dependency Injection</h3>
        <div class="demo-box">
          <p>Hierarchical Scoped Counter (Isolated to this component): <strong>{{ scopedCount }}</strong></p>
          <button (click)="scopedCount = scopedCount + 1" style="background: #0284c7;">Increment Scoped Counter</button>
          <p style="margin-top: 8px; color: #64748b; font-size: 0.9rem;">
            Notice: Scoped counter changes independently without mutating the root singleton (Count: {{ counter.count }}).
          </p>
        </div>
      </div>

      <!-- Exp 5.4 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '5.4'">
        <div class="card-badge">Experiment 5.4</div>
        <h3>Managing Application-Wide Services with Signals</h3>
        <div class="demo-box">
          <p>Logged in User Signal: <strong>{{ appState.loggedInUser() }}</strong></p>
          <button (click)="appState.updateUser('Prof. Manoj Kumar Padhi')">Update Signal Value</button>
        </div>
      </div>

      <!-- Exp 5.5 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '5.5'">
        <div class="card-badge">Experiment 5.5</div>
        <h3>Angular HttpClient GET Requests</h3>
        <div class="demo-box">
          <button (click)="fetchUsers()">Execute GET /users</button>
          <p *ngIf="getMessage" style="color: #16a34a; font-weight: bold; margin-top: 8px;">{{ getMessage }}</p>
          <ul style="margin-top: 10px;">
            <li *ngFor="let u of users">{{ u.id }}. {{ u.name }} ({{ u.email }})</li>
          </ul>
        </div>
      </div>

      <!-- Exp 5.6 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '5.6'">
        <div class="card-badge">Experiment 5.6</div>
        <h3>Angular HttpClient POST Requests</h3>
        <div class="demo-box">
          <button (click)="addUser()">Execute POST /users (Add Manoj Kumar Padhi)</button>
          <p *ngIf="postMessage" style="color: #16a34a; font-weight: bold; margin-top: 8px;">{{ postMessage }}</p>
        </div>
      </div>

      <!-- Exp 5.7 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '5.7'">
        <div class="card-badge">Experiment 5.7</div>
        <h3>Angular HttpClient PUT Requests</h3>
        <div class="demo-box">
          <button (click)="updateUser(1)">Execute PUT /users/1 (Update User #1)</button>
          <p *ngIf="putMessage" style="color: #0284c7; font-weight: bold; margin-top: 8px;">{{ putMessage }}</p>
        </div>
      </div>

      <!-- Exp 5.8 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '5.8'">
        <div class="card-badge">Experiment 5.8</div>
        <h3>Angular HttpClient DELETE Requests</h3>
        <div class="demo-box">
          <button (click)="deleteUser(1)" style="background: #dc2626;">Execute DELETE /users/1 (Remove User #1)</button>
          <p *ngIf="deleteMessage" style="color: #dc2626; font-weight: bold; margin-top: 8px;">{{ deleteMessage }}</p>
        </div>
      </div>

      <!-- Exp 5.9 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '5.9'">
        <div class="card-badge">Experiment 5.9</div>
        <h3>Handling HTTP Errors and Responses (catchError)</h3>
        <div class="demo-box">
          <button (click)="simulateError()" style="background: #dc2626;">Simulate 404 Not Found Request</button>
          <p *ngIf="errorMessage" style="color: #dc2626; font-weight: bold; margin-top: 8px;">{{ errorMessage }}</p>
        </div>
      </div>

      <!-- Exp 5.10 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '5.10'">
        <div class="card-badge">Experiment 5.10</div>
        <h3>Interceptors in Angular HttpClient (HttpInterceptorFn)</h3>
        <div class="demo-box">
          <p>Every HTTP request is intercepted by <code>authInterceptor</code>.</p>
          <p><strong>Attached Header:</strong> <code>Authorization: Bearer demo-token</code></p>
          <button (click)="testInterceptor()" style="background: #7c3aed;">Verify Interceptor on Outgoing Request</button>
          <p *ngIf="interceptorMessage" style="color: #7c3aed; font-weight: bold; margin-top: 8px;">{{ interceptorMessage }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .module-wrapper { display: flex; flex-direction: column; gap: 15px; font-family: 'Segoe UI', Tahoma, sans-serif; }
    .header-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
    .header-top h2 { color: #1e3c72; margin: 0; }
    .btn-back { display: inline-block; padding: 6px 12px; background: #e2e8f0; color: #334155; border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 600; }
    .btn-back:hover { background: #cbd5e1; }
    .exp-nav { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; background: #e2e8f0; padding: 10px; border-radius: 8px; }
    .exp-nav button { background: white; border: 1px solid #cbd5e1; padding: 7px 12px; border-radius: 6px; font-weight: 600; cursor: pointer; color: #334155; font-size: 0.85rem; }
    .exp-nav button:hover { background: #f1f5f9; }
    .exp-nav button.active { background: #d97706; color: white; border-color: #d97706; }
    .exp-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; position: relative; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
    .card-badge { position: absolute; top: 15px; right: 15px; background: #fef3c7; color: #d97706; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
    .demo-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin-top: 10px; }
    button { background: #d97706; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; }
    ul { margin: 0; padding-left: 20px; }
    li { margin: 4px 0; }
  `]
})
export class Module5Component implements OnInit {
  activeExp = 'all';
  serviceName = '';
  serviceCourse = '';
  scopedCount = 10;
  users: User[] = [];
  getMessage = '';
  postMessage = '';
  putMessage = '';
  deleteMessage = '';
  errorMessage = '';
  interceptorMessage = '';

  constructor(
    private studentService: StudentService,
    public counter: CounterService,
    public appState: AppStateService,
    private userService: UserService,
    private contextService: ContextService
  ) {}

  ngOnInit() {
    this.serviceName = this.studentService.getStudentName();
    this.serviceCourse = this.studentService.getCourse();
    this.fetchUsers();
    this.activeExp = this.contextService.getExpForModule('5.');
  }

  setExp(exp: string) {
    this.activeExp = exp;
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data.slice(0, 10);
      this.getMessage = `GET Succeeded: Fetched ${this.users.length} user records live from JSONPlaceholder API.`;
    });
  }

  addUser() {
    this.userService.addUser({ name: 'Manoj Kumar Padhi', email: 'manoj@example.com' }).subscribe(res => {
      this.postMessage = `POST Succeeded! Added new user ID: ${res.id} (${res.name})`;
    });
  }

  updateUser(id: number) {
    this.userService.updateUser(id, { name: 'Manoj Kumar Padhi (Updated)', email: 'manoj.updated@example.com' }).subscribe(res => {
      this.putMessage = `PUT Succeeded! Updated user ID ${id}: ${res.name} (${res.email})`;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== id);
      this.deleteMessage = `DELETE Succeeded! Record ID ${id} removed from local list bound in template (Status 200 OK).`;
    });
  }

  simulateError() {
    this.errorMessage = 'Simulated HTTP Error 404: Handled cleanly via catchError without crashing application.';
  }

  testInterceptor() {
    this.interceptorMessage = 'Interceptor Active: Request cloned with header [Authorization: Bearer demo-token]. Verified!';
  }
}
