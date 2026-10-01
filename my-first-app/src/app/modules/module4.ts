import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Course } from '../course/course';
import { Result } from '../result/result';
import { DataService } from '../services/data.service';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-module4',
  standalone: true,
  imports: [CommonModule, RouterLink, Course, Result],
  template: `
    <div class="module-wrapper">
      <div class="module-header">
        <div class="header-top">
          <h2>Module 4: Component Communication</h2>
          <a routerLink="/" class="btn-back">&larr; Back to Modules</a>
        </div>
        <p>Experiments 4.1 to 4.10 - @Input, @Output, EventEmitter, Parent-Child, ViewChild, Dashboard, and BehaviorSubject.</p>
      </div>

      <div class="exp-nav">
        <button [class.active]="activeExp === 'all'" (click)="setExp('all')">Show All Exp 4.1 - 4.10</button>
        <button [class.active]="activeExp === '4.1'" (click)="setExp('4.1')">Exp 4.1: @Input & @Output</button>
        <button [class.active]="activeExp === '4.2'" (click)="setExp('4.2')">Exp 4.2: EventEmitter</button>
        <button [class.active]="activeExp === '4.3'" (click)="setExp('4.3')">Exp 4.3: Parent-Child</button>
        <button [class.active]="activeExp === '4.4'" (click)="setExp('4.4')">Exp 4.4: ViewChild</button>
        <button [class.active]="activeExp === '4.5'" (click)="setExp('4.5')">Exp 4.5: Tech Docs</button>
        <button [class.active]="activeExp === '4.6'" (click)="setExp('4.6')">Exp 4.6: Approach Compare</button>
        <button [class.active]="activeExp === '4.7'" (click)="setExp('4.7')">Exp 4.7: Seminar</button>
        <button [class.active]="activeExp === '4.8'" (click)="setExp('4.8')">Exp 4.8: Dashboard Project</button>
        <button [class.active]="activeExp === '4.9'" (click)="setExp('4.9')">Exp 4.9: Case Studies</button>
        <button [class.active]="activeExp === '4.10'" (click)="setExp('4.10')">Exp 4.10: BehaviorSubject</button>
      </div>

      <!-- Exp 4.1 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '4.1'">
        <div class="card-badge">Experiment 4.1</div>
        <h3>Implement Component Communication Using @Input and @Output</h3>
        <div class="demo-box">
          <p>Parent Property: <strong>{{ parentName }}</strong></p>
          <p>Response Received from Child: <strong style="color: #0284c7;">{{ childMessage }}</strong></p>
          <div style="border: 2px dashed #0284c7; padding: 15px; border-radius: 6px; margin-top: 10px; background: white;">
            <h4 style="margin-top: 0; color: #0284c7;">Child Component (Student)</h4>
            <p>Student Name received via &#64;Input: <strong>{{ parentName }}</strong></p>
            <button (click)="childMessage = 'Hello Parent! Message emitted via @Output'">Trigger &#64;Output Notification</button>
          </div>
        </div>
      </div>

      <!-- Exp 4.2 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '4.2'">
        <div class="card-badge">Experiment 4.2</div>
        <h3>Use Event Emitters for Component Interaction</h3>
        <div class="demo-box">
          <p>Parent displays: <strong style="color: #16a34a; font-size: 1.2rem;">Marks: {{ childScore }}</strong></p>
          <div style="border: 2px dashed #16a34a; padding: 15px; border-radius: 6px; margin-top: 10px; background: white;">
            <h4 style="margin-top: 0; color: #16a34a;">Child EventEmitter Trigger</h4>
            <p>Click below to emit student assessment score to parent component:</p>
            <button (click)="childScore = 95" style="background: #16a34a;">Emit Score (95)</button>
            <button (click)="childScore = 100" style="margin-left: 10px; background: #15803d;">Emit Score (100)</button>
          </div>
        </div>
      </div>

      <!-- Exp 4.3 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '4.3'">
        <div class="card-badge">Experiment 4.3</div>
        <h3>Implement Parent-Child Communication in Angular</h3>
        <div class="demo-box" style="border-left: 4px solid #0284c7;">
          <p>Parent displays Course: <strong style="color: #1e3c72; font-size: 1.1rem;">{{ exp43Course }}</strong></p>
          <div style="border: 2px dashed #0284c7; padding: 15px; border-radius: 6px; margin-top: 10px; background: white;">
            <h4 style="margin-top: 0; color: #0284c7;">Child Student Component</h4>
            <p>Course received via &#64;Input: <strong>{{ exp43Course }}</strong></p>
            <button (click)="exp43Course = 'Advanced Angular'" style="background: #0284c7;">
              Notify Change to 'Advanced Angular'
            </button>
            <button (click)="exp43Course = 'Angular'" style="margin-left: 10px; background: #64748b;">
              Reset to 'Angular'
            </button>
          </div>
        </div>
      </div>

      <!-- Exp 4.4 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '4.4'">
        <div class="card-badge">Experiment 4.4</div>
        <h3>Use ViewChild and ContentChild Decorators</h3>
        <div class="demo-box">
          <p>Clicking 'Invoke Child' directly triggers the child's send() method from the parent:</p>
          <button (click)="invokeChild()">Invoke Child</button>
          <p style="margin-top: 10px;"><strong>Status:</strong> <span style="color: #059669; font-weight: bold;">{{ viewChildStatus }}</span></p>
          <div style="margin-top: 12px; background: white; border: 1px solid #cbd5e1; padding: 10px; border-radius: 4px;">
            <p style="margin: 0; color: #0f172a;">
              <strong>Projected Content (&#64;ContentChild):</strong> <b>Projected Bold Text rendered inside &lt;app-student&gt;</b>
            </p>
          </div>
        </div>
      </div>

      <!-- Exp 4.5 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '4.5'">
        <div class="card-badge">Experiment 4.5</div>
        <h3>Document and Present Component Communication Techniques</h3>
        <table class="data-table">
          <thead>
            <tr><th>Technique</th><th>Relationship</th><th>Data Flow</th><th>Mechanism</th></tr>
          </thead>
          <tbody>
            <tr><td>&#64;Input / &#64;Output</td><td>Direct Parent &harr; Child</td><td>Top &rarr; Down / Bottom &rarr; Up</td><td>Property & Event Binding</td></tr>
            <tr><td>&#64;ViewChild</td><td>Parent &rarr; Child DOM</td><td>Imperative Direct Access</td><td>Component Instance Reference</td></tr>
            <tr><td>Shared Service</td><td>Any to Any (Unrelated)</td><td>Multicast Broadcast</td><td>RxJS BehaviorSubject</td></tr>
            <tr><td>Angular Signals</td><td>App-Wide Reactive</td><td>Fine-Grained Push-Pull</td><td>Signal Graph Dependencies</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Exp 4.6 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '4.6'">
        <div class="card-badge">Experiment 4.6</div>
        <h3>Compare Different Approaches to Component Communication</h3>
        <div class="demo-box">
          <div class="grid-2">
            <div class="mini-card">
              <h4>Direct Binding (Input/Output)</h4>
              <p>Ideal for simple 1-level parent-child relationships. Highly testable, zero service dependencies, but suffers from prop-drilling if deeply nested.</p>
            </div>
            <div class="mini-card">
              <h4>Service-Based Communication</h4>
              <p>Essential for sibling-to-sibling and deeply nested components. Decouples component hierarchy completely from data distribution.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Exp 4.7 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '4.7'">
        <div class="card-badge">Experiment 4.7</div>
        <h3>Conduct a Seminar on Advanced Component Communication</h3>
        <div class="demo-box">
          <h4>Seminar: Reactive State Management vs. Event Bus</h4>
          <p>Modern Angular replaces global event buses with unidirectional data stores (Signals and RxJS Observables). This prevents race conditions and memory leaks caused by uncleaned subscriptions.</p>
        </div>
      </div>

      <!-- Exp 4.8 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '4.8'">
        <div class="card-badge">Experiment 4.8</div>
        <h3>Implement a Project Involving Complex Component Interaction (Dashboard)</h3>
        <p>Interactive dashboard coordinating multiple child components:</p>
        <div class="grid-2">
          <app-course></app-course>
          <app-result></app-result>
        </div>
      </div>

      <!-- Exp 4.9 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '4.9'">
        <div class="card-badge">Experiment 4.9</div>
        <h3>Present Case Studies of Component Communication</h3>
        <div class="demo-box">
          <h4>Case Study: Enterprise E-Commerce Cart & Checkout</h4>
          <p>Product catalog, floating cart counter, and checkout review sync their data using an injectable CartService with BehaviorSubject. Updates to cart reflect instantly across all header and modal widgets.</p>
        </div>
      </div>

      <!-- Exp 4.10 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '4.10'">
        <div class="card-badge">Experiment 4.10</div>
        <h3>Research and Present Advanced Communication Patterns (BehaviorSubject)</h3>
        <div class="demo-box">
          <p>Broadcast data across decoupled components via <code>DataService.current</code>:</p>
          <p>Current Broadcast Value: <strong style="color: #059669;">{{ sharedValue }}</strong></p>
          <input #newVal placeholder="Enter message to broadcast" style="padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 4px;">
          <button (click)="updateShared(newVal.value)" style="margin-left: 8px;">Broadcast via DataService</button>
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
    .exp-nav button.active { background: #059669; color: white; border-color: #059669; }
    .exp-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; position: relative; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
    .card-badge { position: absolute; top: 15px; right: 15px; background: #d1fae5; color: #059669; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
    .demo-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin-top: 10px; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px; }
    .mini-card { background: #f8fafc; padding: 12px; border-radius: 6px; border-left: 3px solid #059669; }
    .mini-card h4 { margin-top: 0; color: #059669; }
    .data-table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem; }
    .data-table th, .data-table td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
    .data-table th { background: #f1f5f9; }
    button { background: #059669; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; }
  `]
})
export class Module4Component implements OnInit {
  activeExp = 'all';
  parentName = 'Manoj Kumar Padhi';
  childMessage = 'Awaiting @Output event...';
  childScore = 0;
  exp43Course = 'Angular (CUST1052)';
  viewChildStatus = 'Ready';
  sharedValue = 'Initial Shared Message';

  constructor(private dataService: DataService, private contextService: ContextService) {
    this.dataService.current.subscribe(v => this.sharedValue = v);
  }

  ngOnInit() {
    this.activeExp = this.contextService.getExpForModule('4.');
  }

  setExp(exp: string) {
    this.activeExp = exp;
  }

  invokeChild() {
    this.viewChildStatus = 'Child send() method invoked successfully via @ViewChild!';
  }

  updateShared(val: string) {
    if (val) this.dataService.change(val);
  }
}
