import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Highlight } from '../highlight';
import { ContextService } from '../services/context.service';

interface StudentRecord {
  name: string;
  marks: number;
}

@Component({
  selector: 'app-module3',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Highlight],
  template: `
    <div class="module-wrapper">
      <div class="module-header">
        <div class="header-top">
          <h2>Module 3: Data Binding and Directives</h2>
          <a routerLink="/" class="btn-back">&larr; Back to Modules</a>
        </div>
        <p>Experiments 3.0 to 3.10 - Interpolation, Property, Event, Two-Way Binding, Built-in & Custom Directives, Gradebook Project.</p>
      </div>

      <div class="exp-nav">
        <button [class.active]="activeExp === 'all'" (click)="setExp('all')">Show All Exp 3.0 - 3.10</button>
        <button [class.active]="activeExp === '3.0'" (click)="setExp('3.0')">Exp 3.0: Interpolation</button>
        <button [class.active]="activeExp === '3.1'" (click)="setExp('3.1')">Exp 3.1: Property Binding</button>
        <button [class.active]="activeExp === '3.2'" (click)="setExp('3.2')">Exp 3.2: Event Binding</button>
        <button [class.active]="activeExp === '3.3'" (click)="setExp('3.3')">Exp 3.3: Two-Way Binding</button>
        <button [class.active]="activeExp === '3.4'" (click)="setExp('3.4')">Exp 3.4: Built-in Directives</button>
        <button [class.active]="activeExp === '3.5'" (click)="setExp('3.5')">Exp 3.5: Custom Directive</button>
        <button [class.active]="activeExp === '3.6'" (click)="setExp('3.6')">Exp 3.6: Binding Presentation</button>
        <button [class.active]="activeExp === '3.7'" (click)="setExp('3.7')">Exp 3.7: Compare Techniques</button>
        <button [class.active]="activeExp === '3.8'" (click)="setExp('3.8')">Exp 3.8: Directives Seminar</button>
        <button [class.active]="activeExp === '3.9'" (click)="setExp('3.9')">Exp 3.9: Gradebook Project</button>
        <button [class.active]="activeExp === '3.10'" (click)="setExp('3.10')">Exp 3.10: Case Studies</button>
      </div>

      <!-- Exp 3.0: Interpolation -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.0'">
        <div class="card-badge">Experiment 3.0</div>
        <h3>(Foundation) Interpolation</h3>
        <div class="demo-box">
          <h2 style="color: #1976d2; margin-top: 0;">{{ name }}</h2>
          <p><strong>Subject :</strong> {{ subject }}</p>
          <p><strong>College :</strong> {{ college }}</p>
          <p><strong>Semester :</strong> {{ semester }}</p>
        </div>
      </div>

      <!-- Exp 3.1: Property Binding -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.1'">
        <div class="card-badge">Experiment 3.1</div>
        <h3>Implement Property Binding in an Angular Application</h3>
        <div class="demo-box">
          <div style="margin-bottom: 12px;">
            <img [src]="imageUrl" [width]="120" alt="Angular Logo">
          </div>
          <p><label>Value Bound: </label><input [value]="name"></p>
          <p><label>Placeholder Bound: </label><input [placeholder]="placeholderText"></p>
          <p><a [href]="website" target="_blank">Visit Angular Website (href bound)</a></p>
          <button [disabled]="isDisabled">Save (disabled bound)</button>
        </div>
      </div>

      <!-- Exp 3.2: Event Binding -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.2'">
        <div class="card-badge">Experiment 3.2</div>
        <h3>Use Event Binding to Handle User Interactions</h3>
        <div class="demo-box">
          <h4 style="color: #d32f2f;">{{ message }}</h4>
          <button (click)="showMessage()">Click Me (Show Alert)</button>
          <button (click)="changeMessage()" style="margin-left: 10px;">Change Message</button>
        </div>
      </div>

      <!-- Exp 3.3: Two-Way Data Binding -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.3'">
        <div class="card-badge">Experiment 3.3</div>
        <h3>Implement Two-Way Data Binding with ngModel</h3>
        <div class="demo-box">
          <label>Enter Name: </label>
          <input type="text" [(ngModel)]="name" style="padding: 8px; font-size: 16px; border: 2px solid #0284c7; border-radius: 4px;">
          <h3 style="margin-top: 12px; color: #0284c7;">Student Name: {{ name }}</h3>
        </div>
      </div>

      <!-- Exp 3.4: Built-in Directives -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.4'">
        <div class="card-badge">Experiment 3.4</div>
        <h3>Use Built-in Directives (*ngIf, *ngFor, ngClass, ngStyle)</h3>
        <div class="demo-box">
          <p *ngIf="isLoggedIn" class="badge-success">Welcome Manoj Kumar Padhi (*ngIf active)</p>
          <p [ngClass]="{'active-text': isActive}" [ngStyle]="{'font-size': isActive ? '18px' : '14px'}">
            Dynamic ngClass and ngStyle applied!
          </p>
          <h4>Student List (*ngFor):</h4>
          <ul>
            <li *ngFor="let s of students">{{ s }}</li>
          </ul>
        </div>
      </div>

      <!-- Exp 3.5: Custom Directive -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.5'">
        <div class="card-badge">Experiment 3.5</div>
        <h3>Create and Use Custom Directives ([appHighlight])</h3>
        <div class="demo-box">
          <p appHighlight style="padding: 15px; border: 2px dashed #f59e0b; cursor: pointer; border-radius: 6px;">
            Hover over this text to see the custom directive [appHighlight] in action (turns yellow).
          </p>
        </div>
      </div>

      <!-- Exp 3.6: Binding Presentation -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.6'">
        <div class="card-badge">Experiment 3.6</div>
        <h3>Present the Use of Data Binding in Angular</h3>
        <div class="demo-box">
          <h4>Data Binding Architecture Flow:</h4>
          <ul>
            <li><strong>Source to View:</strong> One-way binding pushing model data into the DOM (Interpolation & Property Binding).</li>
            <li><strong>View to Source:</strong> One-way event capturing user interaction from the DOM to TypeScript methods.</li>
            <li><strong>Bidirectional:</strong> Banana-in-a-box <code>[(ngModel)]</code> coordinating model and view simultaneously.</li>
          </ul>
        </div>
      </div>

      <!-- Exp 3.7: Compare Techniques -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.7'">
        <div class="card-badge">Experiment 3.7</div>
        <h3>Compare Different Data Binding Techniques</h3>
        <table class="data-table">
          <thead>
            <tr><th>Technique</th><th>Direction</th><th>Syntax</th><th>Use Case</th></tr>
          </thead>
          <tbody>
            <tr><td>Interpolation</td><td>Component &rarr; View</td><td><code ngNonBindable>{{ value }}</code></td><td>Displaying text in HTML</td></tr>
            <tr><td>Property Binding</td><td>Component &rarr; View</td><td><code>[property]="value"</code></td><td>Binding element properties (src, disabled)</td></tr>
            <tr><td>Event Binding</td><td>View &rarr; Component</td><td><code>(event)="handler()"</code></td><td>Listening to clicks, inputs, submits</td></tr>
            <tr><td>Two-Way Binding</td><td>Component &harr; View</td><td><code ngNonBindable>[(ngModel)]="value"</code></td><td>User input forms and controls</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Exp 3.8: Directives Seminar -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.8'">
        <div class="card-badge">Experiment 3.8</div>
        <h3>Conduct a Seminar on Angular Directives</h3>
        <div class="demo-box">
          <h4>Structural vs. Attribute Directives</h4>
          <p><strong>Structural Directives (*ngIf, *ngFor):</strong> Modify the DOM layout by adding or removing elements. Uses the asterisk prefix which Angular desugars into <code>&lt;ng-template&gt;</code>.</p>
          <p><strong>Attribute Directives (ngClass, ngStyle, custom):</strong> Alter the appearance or behavior of an existing element without altering the DOM tree structure.</p>
        </div>
      </div>

      <!-- Exp 3.9: Directive Project -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.9'">
        <div class="card-badge">Experiment 3.9</div>
        <h3>Implement a Directive-Based Project (Gradebook)</h3>
        <div class="demo-box">
          <ul class="grade-list">
            <li *ngFor="let r of records" [ngClass]="{'pass': r.marks >= 40, 'fail': r.marks < 40}">
              <strong>{{ r.name }}</strong> - {{ r.marks }} marks
              <span *ngIf="r.marks < 40" class="warn-badge">(Needs Improvement)</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Exp 3.10: Case Studies -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '3.10'">
        <div class="card-badge">Experiment 3.10</div>
        <h3>Present Case Studies of Data Binding and Directives</h3>
        <div class="demo-box">
          <h4>Case Study: Real-Time Telemetry & Financial Dashboard</h4>
          <p>Directives optimize UI rendering by attaching custom tooltip, permission-based element hiding (<code>*hasRole</code>), and virtual scrolling (<code>*cdkVirtualFor</code>) for 10,000+ row grids.</p>
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
    .exp-nav button.active { background: #1976d2; color: white; border-color: #1976d2; }
    .exp-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; position: relative; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
    .card-badge { position: absolute; top: 15px; right: 15px; background: #e0f2fe; color: #0284c7; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
    .demo-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin-top: 10px; }
    .badge-success { background: #dcfce7; color: #15803d; padding: 6px 12px; border-radius: 4px; display: inline-block; }
    .active-text { color: #16a34a; font-weight: bold; }
    .grade-list { list-style: none; padding: 0; }
    .grade-list li { padding: 10px; margin: 6px 0; border-radius: 6px; }
    .pass { background: #dcfce7; color: #15803d; border-left: 5px solid #16a34a; }
    .fail { background: #fee2e2; color: #991b1b; border-left: 5px solid #dc2626; }
    .warn-badge { font-weight: bold; margin-left: 10px; }
    .data-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .data-table th, .data-table td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
    .data-table th { background: #f1f5f9; }
    button { background: #0284c7; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; }
    input { padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 4px; }
  `]
})
export class Module3Component implements OnInit {
  activeExp = 'all';
  name = 'Manoj Kumar Padhi';
  subject = 'Angular';
  college = 'Centurion University';
  semester = 5;
  imageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
  isDisabled = false;
  website = 'https://angular.dev';
  placeholderText = 'Enter your name';
  message = 'Welcome to Angular';
  isLoggedIn = true;
  isActive = true;
  students = ['Manoj', 'Rahul', 'Anita', 'Priya'];

  records: StudentRecord[] = [
    { name: 'Manoj', marks: 92 },
    { name: 'Rahul', marks: 38 },
    { name: 'Anita', marks: 76 }
  ];

  constructor(private contextService: ContextService) {}

  ngOnInit() {
    this.activeExp = this.contextService.getExpForModule('3.');
  }

  setExp(exp: string) {
    this.activeExp = exp;
  }

  showMessage() {
    alert('Welcome to Angular Event Binding!');
  }

  changeMessage() {
    this.message = 'Event Binding Executed Successfully!';
  }
}
