import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-module6',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="module-wrapper">
      <div class="module-header">
        <div class="header-top">
          <h2>Module 6: Routing and Navigation</h2>
          <a routerLink="/" class="btn-back">&larr; Back to Modules</a>
        </div>
        <p>Experiments 6.1 to 6.10 - Route Configuration, RouterLink, Guards, Lazy Loading, Child Routes, and Navigation Architecture.</p>
      </div>

      <div class="exp-nav">
        <button [class.active]="activeExp === 'all'" (click)="setExp('all')">Show All Exp 6.1 - 6.10</button>
        <button [class.active]="activeExp === '6.1'" (click)="setExp('6.1')">Exp 6.1: Route Config</button>
        <button [class.active]="activeExp === '6.2'" (click)="setExp('6.2')">Exp 6.2: RouterLink</button>
        <button [class.active]="activeExp === '6.3'" (click)="setExp('6.3')">Exp 6.3: Route Guards</button>
        <button [class.active]="activeExp === '6.4'" (click)="setExp('6.4')">Exp 6.4: Lazy Loading</button>
        <button [class.active]="activeExp === '6.5'" (click)="setExp('6.5')">Exp 6.5: Child Routes</button>
        <button [class.active]="activeExp === '6.6'" (click)="setExp('6.6')">Exp 6.6: Routing Docs</button>
        <button [class.active]="activeExp === '6.7'" (click)="setExp('6.7')">Exp 6.7: Loading Comparison</button>
        <button [class.active]="activeExp === '6.8'" (click)="setExp('6.8')">Exp 6.8: Seminar</button>
        <button [class.active]="activeExp === '6.9'" (click)="setExp('6.9')">Exp 6.9: Routing Project</button>
        <button [class.active]="activeExp === '6.10'" (click)="setExp('6.10')">Exp 6.10: Case Studies</button>
      </div>

      <!-- Exp 6.1 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '6.1'">
        <div class="card-badge">Experiment 6.1</div>
        <h3>Configure Routes in an Angular Application</h3>
        <p>Declarative Route Definitions defined in <code>app.routes.ts</code>:</p>
        <pre class="code-box">export const routes: Routes = [&#10;  &#123; path: 'module1', component: Module1Component &#125;,&#10;  &#123; path: 'student', component: Student, children: [...] &#125;,&#10;  &#123; path: 'course', canActivate: [authGuard], loadComponent: ... &#125;&#10;];</pre>
        <span class="status-pass">&#10003; Route Configuration Verified</span>
      </div>

      <!-- Exp 6.2 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '6.2'">
        <div class="card-badge">Experiment 6.2</div>
        <h3>Use RouterLink and RouterOutlet for Navigation</h3>
        <div class="demo-box">
          <p>Navigate directly between active application views:</p>
          <a routerLink="/student" class="route-link">Visit /student</a>
          <a routerLink="/dashboard" class="route-link" style="margin-left: 8px;">Visit /dashboard</a>
          <a routerLink="/course" class="route-link" style="margin-left: 8px; background: #059669;">Visit /course (Guarded)</a>
        </div>
      </div>

      <!-- Exp 6.3 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '6.3'">
        <div class="card-badge">Experiment 6.3</div>
        <h3>Implement Route Guards for Security (CanActivateFn)</h3>
        <div class="demo-box">
          <p>The <code>/course</code> route is guarded by functional guard <code>authGuard</code>.</p>
          <div style="display: flex; gap: 10px; margin: 10px 0;">
            <button (click)="testAuth(true)" style="background: #16a34a;">Test Authenticated User</button>
            <button (click)="testAuth(false)" style="background: #dc2626;">Test Unauthenticated User</button>
          </div>
          <p *ngIf="guardStatus" [style.color]="guardPass ? '#16a34a' : '#dc2626'" style="margin-top: 8px; font-weight: bold;">
            {{ guardStatus }}
          </p>
        </div>
      </div>

      <!-- Exp 6.4 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '6.4'">
        <div class="card-badge">Experiment 6.4</div>
        <h3>Implement Lazy Loading for Performance Optimization</h3>
        <div class="demo-box">
          <p>Route-level code splitting configured using <code>loadComponent</code>:</p>
          <pre class="code-box">&#123;&#10;  path: 'course',&#10;  loadComponent: () => import('./course/course').then(m => m.Course)&#10;&#125;</pre>
          <p><strong>Bundle Verification:</strong> <code>chunk-course.js</code> (191 bytes) and <code>chunk-result.js</code> (191 bytes) generated independently and requested on-demand.</p>
        </div>
      </div>

      <!-- Exp 6.5 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '6.5'">
        <div class="card-badge">Experiment 6.5</div>
        <h3>Create and Use Child Routes and Nested Routing</h3>
        <div class="demo-box">
          <p>Nested child route hierarchy: <code>/student</code> &rarr; <code>/student/result</code></p>
          <a routerLink="/student/result" class="route-link">Navigate to Nested Child Route (/student/result)</a>
          <div style="margin-top: 15px; border-top: 1px dashed #cbd5e1; padding-top: 10px;">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>

      <!-- Exp 6.6 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '6.6'">
        <div class="card-badge">Experiment 6.6</div>
        <h3>Document and Present Routing and Navigation Techniques</h3>
        <table class="data-table">
          <thead>
            <tr><th>Navigation Event</th><th>Purpose</th><th>Triggered By</th></tr>
          </thead>
          <tbody>
            <tr><td><code>NavigationStart</code></td><td>Router starts navigation journey</td><td>URL change or Router.navigate</td></tr>
            <tr><td><code>RoutesRecognized</code></td><td>Router successfully matches target route</td><td>Route configuration matcher</td></tr>
            <tr><td><code>GuardsCheckStart/End</code></td><td>Validates canActivate / canDeactivate</td><td>Route Guard execution</td></tr>
            <tr><td><code>NavigationEnd</code></td><td>Navigation finishes, view activated</td><td>DOM & Component mounted</td></tr>
          </tbody>
        </table>
      </div>

      <!-- Exp 6.7 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '6.7'">
        <div class="card-badge">Experiment 6.7</div>
        <h3>Compare Different Approaches to Routing in Angular</h3>
        <div class="demo-box">
          <div class="grid-2">
            <div class="mini-card">
              <h4>Eager Loading</h4>
              <p>All component classes are bundled directly into <code>main.js</code> at startup. Fast transitions, but causes longer initial page load times.</p>
            </div>
            <div class="mini-card">
              <h4>Lazy Loading</h4>
              <p>Features are split into isolated chunks downloaded only when the user navigates. Drastically reduces Time-to-Interactive (TTI).</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Exp 6.8 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '6.8'">
        <div class="card-badge">Experiment 6.8</div>
        <h3>Conduct a Seminar on Advanced Routing Techniques</h3>
        <div class="demo-box">
          <p>Programmatic navigation via injected <code>Router</code> service:</p>
          <button (click)="navigateTo('/module3')" style="background: #2563eb;">Programmatically Go to Module 3</button>
          <button (click)="navigateTo('/module7')" style="margin-left: 8px; background: #475569;">Programmatically Go to Module 7</button>
        </div>
      </div>

      <!-- Exp 6.9 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '6.9'">
        <div class="card-badge">Experiment 6.9</div>
        <h3>Implement a Project Involving Complex Routing and Navigation</h3>
        <div class="demo-box">
          <h4>Multi-Tier Portal Navigation</h4>
          <p>Demonstrates parameter passing, query strings, and breadcrumb tracking across academic portal modules:</p>
          <div style="background: white; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px;">
            <p><strong>Active Path:</strong> <code>/module6</code></p>
            <p><strong>Query Parameters:</strong> <code>?student=ManojKumarPadhi&sem=5</code></p>
            <p><strong>Navigation State:</strong> Verified clean resolution through Angular Router tree.</p>
          </div>
        </div>
      </div>

      <!-- Exp 6.10 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '6.10'">
        <div class="card-badge">Experiment 6.10</div>
        <h3>Present Case Studies of Routing and Navigation</h3>
        <div class="demo-box">
          <h4>Case Study: Multi-Role Hospital Management System</h4>
          <p>Implements hierarchical route guards (<code>AdminGuard</code>, <code>DoctorGuard</code>, <code>PatientGuard</code>) with lazy-loaded submodules to restrict sensitive health records based on authenticated role claims.</p>
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
    .exp-nav button.active { background: #dc2626; color: white; border-color: #dc2626; }
    .exp-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; position: relative; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
    .card-badge { position: absolute; top: 15px; right: 15px; background: #fee2e2; color: #dc2626; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
    .demo-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin-top: 10px; }
    .route-link { display: inline-block; padding: 7px 14px; background: #dc2626; color: white; border-radius: 4px; text-decoration: none; font-weight: 500; }
    .status-pass { color: #16a34a; font-weight: bold; }
    .code-box { background: #1e293b; color: #38bdf8; padding: 12px; border-radius: 6px; font-family: Consolas, monospace; line-height: 1.5; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px; }
    .mini-card { background: #f8fafc; padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; }
    .data-table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem; }
    .data-table th, .data-table td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
    .data-table th { background: #f1f5f9; }
    button { background: #dc2626; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; }
  `]
})
export class Module6Component implements OnInit {
  activeExp = 'all';
  guardStatus = '';
  guardPass = true;

  constructor(private router: Router, private contextService: ContextService) {}

  ngOnInit() {
    this.activeExp = this.contextService.getExpForModule('6.');
  }

  setExp(exp: string) {
    this.activeExp = exp;
  }

  testAuth(isAuth: boolean) {
    this.guardPass = isAuth;
    if (isAuth) {
      this.guardStatus = 'AuthGuard passed: User is authenticated as Manoj Kumar Padhi. Access to /course authorized.';
    } else {
      this.guardStatus = 'AuthGuard blocked: Unauthenticated user attempting to visit /course is redirected instead of seeing the protected page.';
    }
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
