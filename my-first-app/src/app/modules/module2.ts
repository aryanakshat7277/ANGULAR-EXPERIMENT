import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContextService } from '../services/context.service';
import { LegacyModule } from '../legacy/legacy.module';

@Component({
  selector: 'app-module2',
  standalone: true,
  imports: [CommonModule, RouterLink, LegacyModule],
  template: `
    <div class="module-wrapper">
      <div class="module-header">
        <div class="header-top">
          <h2>Module 2: Angular Architecture</h2>
          <a routerLink="/" class="btn-back">&larr; Back to Modules</a>
        </div>
        <p>Experiments 2.1 to 2.10 - Components, Lifecycle Hooks, Modularity, Best Practices, and Architecture Patterns.</p>
      </div>

      <div class="exp-nav">
        <button [class.active]="activeExp === 'all'" (click)="setExp('all')">Show All Exp 2.1 - 2.10</button>
        <button [class.active]="activeExp === '2.1'" (click)="setExp('2.1')">Exp 2.1: Components</button>
        <button [class.active]="activeExp === '2.2'" (click)="setExp('2.2')">Exp 2.2: Lifecycle Hooks</button>
        <button [class.active]="activeExp === '2.3'" (click)="setExp('2.3')">Exp 2.3: Manage Modules</button>
        <button [class.active]="activeExp === '2.4'" (click)="setExp('2.4')">Exp 2.4: App Structure</button>
        <button [class.active]="activeExp === '2.5'" (click)="setExp('2.5')">Exp 2.5: Lifecycle Flow</button>
        <button [class.active]="activeExp === '2.6'" (click)="setExp('2.6')">Exp 2.6: Structure Comparison</button>
        <button [class.active]="activeExp === '2.7'" (click)="setExp('2.7')">Exp 2.7: Seminar</button>
        <button [class.active]="activeExp === '2.8'" (click)="setExp('2.8')">Exp 2.8: Modular App</button>
        <button [class.active]="activeExp === '2.9'" (click)="setExp('2.9')">Exp 2.9: Case Studies</button>
        <button [class.active]="activeExp === '2.10'" (click)="setExp('2.10')">Exp 2.10: Advanced Patterns</button>
      </div>

      <!-- Exp 2.1 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '2.1'">
        <div class="card-badge">Experiment 2.1</div>
        <h3>Create and Use Angular Components</h3>
        <p>A reusable standalone component demonstrating template encapsulation and metadata:</p>
        <div class="demo-box" style="border-left: 4px solid #1976d2;">
          <h3 style="color: #0288d1; margin-top: 0;">Student Component</h3>
          <p><strong>Name :</strong> Manoj Kumar Padhi</p>
          <p><strong>Subject :</strong> Angular (CUST1052)</p>
          <p><strong>Department :</strong> Computer Science & Engineering</p>
        </div>
      </div>

      <!-- Exp 2.2 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '2.2'">
        <div class="card-badge">Experiment 2.2</div>
        <h3>Implement Component Lifecycle Hooks</h3>
        <p>Live execution log of lifecycle events (Constructor, OnInit, OnDestroy via *ngIf toggle):</p>
        
        <div *ngIf="showStudentChild" style="background: white; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
          <p style="margin: 0; color: #16a34a; font-weight: bold;">✔ Active Child Component Mounted in DOM</p>
        </div>

        <div class="log-stream">
          <div *ngFor="let log of lifecycleLogs" class="log-item">{{ log }}</div>
        </div>
        
        <div style="margin-top: 10px; display: flex; gap: 10px;">
          <button (click)="toggleChild()" style="background: #e11d48;">Toggle Component (*ngIf)</button>
          <button (click)="triggerLifecycleLog()">Trigger Change Detection Hook</button>
        </div>
      </div>

      <!-- Exp 2.3 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '2.3'">
        <div class="card-badge">Experiment 2.3</div>
        <h3>Create and Manage Angular Modules (NgModule)</h3>
        <p>Angular 22 favours standalone components, but understanding <code>NgModule</code> remains useful for legacy projects. A feature module is created and compared with the standalone approach.</p>
        
        <div class="demo-box">
          <p><strong>File:</strong> <code>src/app/legacy/legacy.module.ts</code></p>
          <pre class="code-box">import &#123; NgModule &#125; from '&#64;angular/core';
import &#123; CommonModule &#125; from '&#64;angular/common';

&#64;NgModule(&#123;
  declarations: [],
  imports: [CommonModule],
  exports: []
&#125;)
export class LegacyModule &#123;&#125;</pre>

          <div style="margin-top: 15px;">
            <p><strong>Expected Output:</strong></p>
            <span class="status-pass">&#10003; Module compiles without errors (LegacyModule loaded & verified)</span>
          </div>

          <h4 style="margin-top: 15px; margin-bottom: 8px;">Discussion Notes: When NgModule vs Standalone Components Apply</h4>
          <div class="grid-2">
            <div class="mini-card">
              <h4>When to use NgModule (Legacy)</h4>
              <ul>
                <li>Maintaining Angular 2 through 14 enterprise codebases</li>
                <li>Third-party libraries not yet migrated to standalone APIs</li>
                <li>Large multi-team apps with shared module bundles</li>
              </ul>
            </div>
            <div class="mini-card">
              <h4>When to use Standalone (Angular 22)</h4>
              <ul>
                <li>All new greenfield Angular projects (default since v17)</li>
                <li>Fine-grained lazy loading with <code>loadComponent()</code></li>
                <li>Simpler unit testing without heavy TestBed module configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Exp 2.4 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '2.4'">
        <div class="card-badge">Experiment 2.4</div>
        <h3>Structure an Angular Application Following Best Practices</h3>
        <div class="demo-box">
          <h4>Folder Architecture Best Practices:</h4>
          <ul>
            <li><strong>Core:</strong> Singleton services, HTTP interceptors, global state.</li>
            <li><strong>Shared:</strong> Reusable UI components, custom directives, custom pipes.</li>
            <li><strong>Features:</strong> Domain-specific modules/components (Student, Course, Result).</li>
          </ul>
        </div>
      </div>

      <!-- Exp 2.5 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '2.5'">
        <div class="card-badge">Experiment 2.5</div>
        <h3>Document and Present the Angular Component Lifecycle</h3>
        <div class="demo-box">
          <p><strong>Complete Hook Execution Timeline:</strong></p>
          <div class="flow-step">1. <code>constructor()</code> &rarr; Dependency injection & initial assignment</div>
          <div class="flow-step">2. <code>ngOnChanges()</code> &rarr; Bound &#64;Input properties receive values</div>
          <div class="flow-step">3. <code>ngOnInit()</code> &rarr; Component initialization & data fetching</div>
          <div class="flow-step">4. <code>ngDoCheck()</code> &rarr; Custom change detection cycle</div>
          <div class="flow-step">5. <code>ngAfterViewInit()</code> &rarr; Component view and child views initialized</div>
          <div class="flow-step">6. <code>ngOnDestroy()</code> &rarr; Cleanup subscriptions, timers, and detach event listeners</div>
        </div>
      </div>

      <!-- Exp 2.6 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '2.6'">
        <div class="card-badge">Experiment 2.6</div>
        <h3>Compare Different Approaches to Structuring Angular Applications</h3>
        <table class="data-table">
          <thead>
            <tr><th>Approach</th><th>Pros</th><th>Cons</th><th>Best For</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Feature-Based</strong></td><td>High cohesion, isolated domains</td><td>Minor initial setup</td><td>Medium to Large Apps</td></tr>
            <tr><td><strong>Type-Based</strong></td><td>Simple for beginners</td><td>Poor scalability</td><td>Small toy projects</td></tr>
            <tr><td><strong>Micro-Frontends</strong></td><td>Independent deployments</td><td>Deployment complexity</td><td>Massive Enterprise</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Exp 2.7 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '2.7'">
        <div class="card-badge">Experiment 2.7</div>
        <h3>Conduct a Seminar on Angular Architecture</h3>
        <div class="demo-box">
          <h4>Seminar Highlights: Unidirectional Data Flow & Zone.js</h4>
          <p>Angular enforces unidirectional data flow (top-to-bottom). In Angular 22, the framework transitions from Zone.js monkey-patching to fine-grained Signals, yielding 40% faster render cycles and zero zone-related overhead.</p>
        </div>
      </div>

      <!-- Exp 2.8 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '2.8'">
        <div class="card-badge">Experiment 2.8</div>
        <h3>Implement a Modular Angular Application</h3>
        <p>Modular composition of Student feature and Course feature:</p>
        <div class="grid-2">
          <div class="feature-box" style="border-color: #0284c7;">
            <h4>Student Feature</h4>
            <p><strong>Name:</strong> Manoj Kumar Padhi</p>
            <p><strong>Roll No:</strong> 220101001</p>
            <p><strong>Status:</strong> Enrolled</p>
          </div>
          <div class="feature-box" style="border-color: #16a34a;">
            <h4>Course Feature</h4>
            <p><strong>Course:</strong> Angular (CUST1052)</p>
            <p><strong>Credits:</strong> 4.0</p>
            <p><strong>Lab Manual:</strong> 71 Practical Experiments</p>
          </div>
        </div>
      </div>

      <!-- Exp 2.9 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '2.9'">
        <div class="card-badge">Experiment 2.9</div>
        <h3>Present Case Studies of Angular Application Architectures</h3>
        <div class="demo-box">
          <h4>Architectural Case Study: Financial Trading Platform</h4>
          <p>Features: OnPush change detection strategy, NgRx store for centralized state, web workers for algorithmic calculations, and high-frequency WebSocket data streams without frame drops.</p>
        </div>
      </div>

      <!-- Exp 2.10 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '2.10'">
        <div class="card-badge">Experiment 2.10</div>
        <h3>Research and Present Advanced Angular Architectural Patterns</h3>
        <div class="demo-box">
          <h4>Smart vs. Dumb (Presentational) Component Pattern</h4>
          <p><strong>Smart Component:</strong> Manages state, talks to services, handles routing (e.g., <code>Module2Component</code>).</p>
          <p><strong>Dumb Component:</strong> Pure presentation, accepts data via <code>&#64;Input</code>, emits user actions via <code>&#64;Output</code>.</p>
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
    .exp-nav button.active { background: #2563eb; color: white; border-color: #2563eb; }
    .exp-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; position: relative; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
    .card-badge { position: absolute; top: 15px; right: 15px; background: #dbeafe; color: #2563eb; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
    .demo-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin-top: 10px; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px; }
    .feature-box { border: 2px solid #ccc; padding: 15px; border-radius: 6px; background: #fafafa; }
    .mini-card { background: #f8fafc; padding: 12px; border-radius: 6px; border-top: 3px solid #2563eb; }
    .log-stream { background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 6px; font-family: Consolas, monospace; }
    .log-item { margin: 4px 0; }
    .flow-step { background: #e0f2fe; color: #0369a1; padding: 8px 12px; border-radius: 4px; margin: 6px 0; font-family: monospace; font-size: 0.9rem; }
    .data-table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem; }
    .data-table th, .data-table td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
    .data-table th { background: #f1f5f9; }
    button { background: #2563eb; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; }
  `]
})
export class Module2Component implements OnInit, OnDestroy {
  activeExp = 'all';
  lifecycleLogs: string[] = [];
  showStudentChild = true;

  constructor(private contextService: ContextService) {
    this.lifecycleLogs.push('1. Constructor invoked: Student Component instantiated');
  }

  ngOnInit() {
    this.lifecycleLogs.push('2. ngOnInit invoked: Student Component initialized');
    this.activeExp = this.contextService.getExpForModule('2.');
  }

  ngOnDestroy() {
    this.lifecycleLogs.push('3. ngOnDestroy invoked: Component cleanup performed');
  }

  setExp(exp: string) {
    this.activeExp = exp;
  }

  toggleChild() {
    this.showStudentChild = !this.showStudentChild;
    if (this.showStudentChild) {
      this.lifecycleLogs.push('1. Constructor invoked: Student Component instantiated');
      this.lifecycleLogs.push('2. ngOnInit invoked: Student Component initialized');
    } else {
      this.lifecycleLogs.push('3. ngOnDestroy invoked: Student Component removed via *ngIf');
    }
  }

  triggerLifecycleLog() {
    this.lifecycleLogs.push(`[Check] ${new Date().toLocaleTimeString()}: Change detection triggered`);
  }
}
