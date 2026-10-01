import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContextService } from '../services/context.service';

interface IStudent {
  name: string;
  course: string;
  showInfo(): string;
}

class Student implements IStudent {
  constructor(public name: string, public course: string) {}

  showInfo(): string {
    return `${this.name} is enrolled in ${this.course}`;
  }
}

@Component({
  selector: 'app-module1',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="module-wrapper">
      <div class="module-header">
        <div class="header-top">
          <h2>Module 1: Introduction to Angular and TypeScript Basics</h2>
          <a routerLink="/" class="btn-back">&larr; Back to Modules</a>
        </div>
        <p>Experiments 1.1 to 1.10 - Click any experiment button to run it individually, or view all at once.</p>
      </div>

      <div class="exp-nav">
        <button [class.active]="activeExp === 'all'" (click)="setExp('all')">Show All Exp 1.1 - 1.10</button>
        <button [class.active]="activeExp === '1.1'" (click)="setExp('1.1')">Exp 1.1: Node & CLI</button>
        <button [class.active]="activeExp === '1.2'" (click)="setExp('1.2')">Exp 1.2: New Project</button>
        <button [class.active]="activeExp === '1.3'" (click)="setExp('1.3')">Exp 1.3: Project Structure</button>
        <button [class.active]="activeExp === '1.4'" (click)="setExp('1.4')">Exp 1.4: Dev Config</button>
        <button [class.active]="activeExp === '1.5'" (click)="setExp('1.5')">Exp 1.5: Simple App</button>
        <button [class.active]="activeExp === '1.6'" (click)="setExp('1.6')">Exp 1.6: Seminar</button>
        <button [class.active]="activeExp === '1.7'" (click)="setExp('1.7')">Exp 1.7: Case Studies</button>
        <button [class.active]="activeExp === '1.8'" (click)="setExp('1.8')">Exp 1.8: TS Setup</button>
        <button [class.active]="activeExp === '1.9'" (click)="setExp('1.9')">Exp 1.9: TS Syntax</button>
        <button [class.active]="activeExp === '1.10'" (click)="setExp('1.10')">Exp 1.10: Classes & Interfaces</button>
      </div>

      <!-- Exp 1.1 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '1.1'">
        <div class="card-badge">Experiment 1.1</div>
        <h3>Install Node.js and Angular CLI</h3>
        <p>Verified development runtime environment in VS Code Terminal:</p>
        <pre class="code-box">Node.js: v24.18.0&#10;NPM: 12.0.1&#10;Angular CLI: 22.0.7&#10;OS: Windows x64&#10;Status: Active & Operational</pre>
        <span class="status-pass">&#10003; Node & Angular CLI Verified</span>
      </div>

      <!-- Exp 1.2 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '1.2'">
        <div class="card-badge">Experiment 1.2</div>
        <h3>Create a New Angular Project using Angular CLI</h3>
        <p>Execution of project scaffolding using <code>ng new my-first-app --standalone</code>:</p>
        <pre class="code-box">ng new my-first-app --routing --style=css --standalone&#10;CREATE my-first-app/angular.json&#10;CREATE my-first-app/package.json&#10;CREATE my-first-app/src/main.ts&#10;CREATE my-first-app/src/app/app.ts&#10;✔ Packages installed successfully via npm.</pre>
        <span class="status-pass">&#10003; Standalone Workspace Initialized</span>
      </div>

      <!-- Exp 1.3 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '1.3'">
        <div class="card-badge">Experiment 1.3</div>
        <h3>Explore the Angular Project Structure</h3>
        <p>Standard Angular 22 Project Directory Breakdown:</p>
        <div class="demo-box">
          <ul class="file-tree">
            <li>📁 <strong>src/app/</strong> - Standalone components, services, and route definitions</li>
            <li>📁 <strong>public/</strong> - Static assets (favicons, public images)</li>
            <li>📄 <strong>angular.json</strong> - Workspace build, test, and serve configurations</li>
            <li>📄 <strong>package.json</strong> - NPM dependencies (&#64;angular/core, &#64;angular/router, etc.)</li>
            <li>📄 <strong>tsconfig.json</strong> - TypeScript compiler options (target: ES2022, strict: true)</li>
          </ul>
        </div>
      </div>

      <!-- Exp 1.4 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '1.4'">
        <div class="card-badge">Experiment 1.4</div>
        <h3>Configure the Angular Development Environment</h3>
        <p>VS Code Editor Extensions & Tooling Configuration:</p>
        <div class="demo-box">
          <p>✔ <strong>Angular Language Service:</strong> Installed & Active for template autocompletion</p>
          <p>✔ <strong>ESLint & Prettier:</strong> Configured for strict type and syntax linting</p>
          <p>✔ <strong>VS Code Settings:</strong> <code>.vscode/settings.json</code> set with formatting and debug configurations</p>
        </div>
      </div>

      <!-- Exp 1.5 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '1.5'">
        <div class="card-badge">Experiment 1.5</div>
        <h3>Implement a Simple Angular Application</h3>
        <div class="demo-box" style="text-align: center; padding: 25px;">
          <h1 style="color: #dd0031; margin: 0; font-size: 2rem;">Welcome to Angular</h1>
          <h2 style="color: #1976d2; margin-top: 8px;">Developed by: {{ studentName }}</h2>
          <p style="color: #64748b;">Course: {{ courseTitle }} | Academic Experiment 1.5</p>
        </div>
      </div>

      <!-- Exp 1.6 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '1.6'">
        <div class="card-badge">Experiment 1.6</div>
        <h3>Conduct a Seminar on the Evolution of Angular</h3>
        <div class="demo-box">
          <h4>Key Milestones in Angular Evolution:</h4>
          <ul>
            <li><strong>AngularJS (2010):</strong> MVC pattern, <code>$scope</code>, dirty-checking digest cycle, two-way data binding.</li>
            <li><strong>Angular 2+ (2016):</strong> Complete redesign with TypeScript, component tree architecture, reactive RxJS streams.</li>
            <li><strong>Angular 14-17:</strong> Introduction of Standalone Components, Optional NgModules, Signals, and Vite build pipeline.</li>
            <li><strong>Angular 22:</strong> Full Zoneless change detection, modern build tooling, signal inputs/queries, high performance SSR.</li>
          </ul>
        </div>
      </div>

      <!-- Exp 1.7 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '1.7'">
        <div class="card-badge">Experiment 1.7</div>
        <h3>Present Case Studies of Successful Angular Applications</h3>
        <div class="grid-2">
          <div class="mini-card">
            <h4>Google Cloud Console & Ads</h4>
            <p>Utilizes Angular for high-scale enterprise operations requiring strict typing, massive component reuse, and sub-second UI responsiveness.</p>
          </div>
          <div class="mini-card">
            <h4>JetBlue Airways & Upwork</h4>
            <p>Employs Angular for critical booking workflows, complex dynamic forms, deep link routing, and high availability customer portals.</p>
          </div>
        </div>
      </div>

      <!-- Exp 1.8 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '1.8'">
        <div class="card-badge">Experiment 1.8</div>
        <h3>Install and Set Up TypeScript</h3>
        <p>Compiled standalone TypeScript source with strict configuration:</p>
        <pre class="code-box">tsc --version -> Version 5.9.3&#10;tsc hello.ts --target ES2022 --module ESNext&#10;Output: Hello TypeScript executed via Node.js runtime successfully.</pre>
        <span class="status-pass">&#10003; TypeScript Compiler Operational</span>
      </div>

      <!-- Exp 1.9 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '1.9'">
        <div class="card-badge">Experiment 1.9</div>
        <h3>Implement Basic TypeScript Syntax (Variables, Types, Functions)</h3>
        <div class="demo-box">
          <p><strong>Typed String:</strong> {{ greeting }}</p>
          <p><strong>Typed Number:</strong> {{ age }} years old | <strong>Typed Boolean:</strong> {{ isStudent }}</p>
          <p><strong>Array of Strings:</strong> {{ subjects.join(' | ') }}</p>
          <p><strong>Calculated Function (add(15, 25)):</strong> <strong style="color: #0284c7;">{{ calculateTotal(15, 25) }}</strong></p>
        </div>
      </div>

      <!-- Exp 1.10 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '1.10'">
        <div class="card-badge">Experiment 1.10</div>
        <h3>Create and Use Classes and Interfaces in TypeScript</h3>
        <div class="demo-box">
          <p><strong>File:</strong> <code>student-model.ts</code></p>
          <pre class="code-box" ngNonBindable>interface IStudent &#123;
  name: string;
  course: string;
  showInfo(): string;
&#125;

class Student implements IStudent &#123;
  constructor(public name: string, public course: string) &#123;&#125;
  showInfo(): string &#123;
    return this.name + ' is enrolled in ' + this.course;
  &#125;
&#125;

const s1 = new Student('Manoj Kumar Padhi', 'Angular');
console.log(s1.showInfo());</pre>
          <div style="margin-top: 12px;">
            <p><strong>Expected Output:</strong></p>
            <p style="background: white; border: 1px solid #cbd5e1; padding: 10px; border-radius: 4px; font-family: monospace; color: #0284c7; font-weight: bold; margin: 0;">
              Console prints: '{{ s1.showInfo() }}'
            </p>
          </div>
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
    .exp-nav button.active { background: #0284c7; color: white; border-color: #0284c7; }
    .exp-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; position: relative; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
    .card-badge { position: absolute; top: 15px; right: 15px; background: #e0f2fe; color: #0284c7; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
    .code-box { background: #1e293b; color: #38bdf8; padding: 12px; border-radius: 6px; font-family: Consolas, monospace; line-height: 1.5; }
    .demo-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin-top: 10px; }
    .status-pass { color: #16a34a; font-weight: bold; display: inline-block; margin-top: 6px; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px; }
    .mini-card { background: #f8fafc; padding: 12px; border-radius: 6px; border-left: 3px solid #0284c7; }
    .mini-card h4 { margin-top: 0; color: #0284c7; }
    .file-tree { list-style: none; padding-left: 0; margin: 0; }
    .file-tree li { margin: 6px 0; }
  `]
})
export class Module1Component implements OnInit {
  activeExp = 'all';
  studentName = 'Manoj Kumar Padhi';
  courseTitle = 'Angular (CUST1052)';
  age = 22;
  isStudent = true;
  subjects = ['Angular', 'TypeScript', 'RxJS', 'HTML5/CSS3'];
  greeting = 'Hello Manoj Kumar Padhi, welcome to Angular 22!';
  s1 = new Student('Manoj Kumar Padhi', 'Angular');

  constructor(private contextService: ContextService) {}

  ngOnInit() {
    this.activeExp = this.contextService.getExpForModule('1.');
  }

  setExp(exp: string) {
    this.activeExp = exp;
  }

  calculateTotal(a: number, b: number): number {
    return a + b;
  }
}
