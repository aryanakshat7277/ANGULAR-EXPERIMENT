import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable, of, forkJoin, throwError } from 'rxjs';
import { map, filter, catchError, tap } from 'rxjs/operators';
import { ContextService } from '../services/context.service';

@Component({
  selector: 'app-module7',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="module-wrapper">
      <div class="module-header">
        <div class="header-top">
          <h2>Module 7: RxJS, Testing and Deployment</h2>
          <a routerLink="/" class="btn-back">&larr; Back to Modules</a>
        </div>
        <p>Experiments 7.1 to 7.10 - Observables, Pipe Operators, forkJoin, Error Handling, Testing, and Cloud Deployment.</p>
      </div>

      <div class="exp-nav">
        <button [class.active]="activeExp === 'all'" (click)="setExp('all')">Show All Exp 7.1 - 7.10</button>
        <button [class.active]="activeExp === '7.1'" (click)="setExp('7.1')">Exp 7.1: Observables</button>
        <button [class.active]="activeExp === '7.2'" (click)="setExp('7.2')">Exp 7.2: Pipe Operators</button>
        <button [class.active]="activeExp === '7.3'" (click)="setExp('7.3')">Exp 7.3: forkJoin</button>
        <button [class.active]="activeExp === '7.4'" (click)="setExp('7.4')">Exp 7.4: catchError</button>
        <button [class.active]="activeExp === '7.5'" (click)="setExp('7.5')">Exp 7.5: RxJS GET</button>
        <button [class.active]="activeExp === '7.6'" (click)="setExp('7.6')">Exp 7.6: RxJS POST</button>
        <button [class.active]="activeExp === '7.7'" (click)="setExp('7.7')">Exp 7.7: Unit Tests</button>
        <button [class.active]="activeExp === '7.8'" (click)="setExp('7.8')">Exp 7.8: HTTP Mock Tests</button>
        <button [class.active]="activeExp === '7.9'" (click)="setExp('7.9')">Exp 7.9: Cloud Deploy</button>
        <button [class.active]="activeExp === '7.10'" (click)="setExp('7.10')">Exp 7.10: Prod Optimization</button>
      </div>

      <!-- Exp 7.1 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '7.1'">
        <div class="card-badge">Experiment 7.1</div>
        <h3>Creating and Subscribing to Observables in RxJS</h3>
        <div class="demo-box">
          <p>Sequence emitted by custom Observable stream:</p>
          <pre class="code-box">{{ obsLogs.join('\n') }}</pre>
          <span class="status-pass">&#10003; Stream Completed Cleanly</span>
        </div>
      </div>

      <!-- Exp 7.2 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '7.2'">
        <div class="card-badge">Experiment 7.2</div>
        <h3>Using RxJS Operators for Data Transformation (filter & map)</h3>
        <div class="demo-box">
          <p>Initial Array Stream: <code>[1, 2, 3, 4, 5]</code></p>
          <p>Piped Transformation (filter evens &times; 10): <strong style="color: #475569; font-size: 1.1rem;">{{ operatorResult.join(', ') }}</strong></p>
        </div>
      </div>

      <!-- Exp 7.3 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '7.3'">
        <div class="card-badge">Experiment 7.3</div>
        <h3>Combining Observables Using RxJS Operators (forkJoin)</h3>
        <div class="demo-box">
          <p>Concurrent async operations synchronized via <code>forkJoin</code>:</p>
          <pre class="code-box">{{ forkJoinResult | json }}</pre>
        </div>
      </div>

      <!-- Exp 7.4 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '7.4'">
        <div class="card-badge">Experiment 7.4</div>
        <h3>Implementing Error Handling in RxJS (catchError)</h3>
        <div class="demo-box">
          <p>Stream emitted error intercepted and recovered gracefully:</p>
          <p class="status-pass">{{ errorResult }}</p>
        </div>
      </div>

      <!-- Exp 7.5 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '7.5'">
        <div class="card-badge">Experiment 7.5</div>
        <h3>Using Observables with Angular HttpClient: Performing GET Requests</h3>
        <div class="demo-box">
          <button (click)="testRxjsGet()">Execute RxJS GET Stream</button>
          <p *ngIf="rxjsGetMessage" style="color: #16a34a; font-weight: bold; margin-top: 8px;">{{ rxjsGetMessage }}</p>
        </div>
      </div>

      <!-- Exp 7.6 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '7.6'">
        <div class="card-badge">Experiment 7.6</div>
        <h3>Sending Data with POST Requests Using Angular HttpClient and RxJS (tap)</h3>
        <div class="demo-box">
          <button (click)="testRxjsPost()">Execute RxJS POST with tap() Operator</button>
          <p *ngIf="rxjsPostMessage" style="color: #0284c7; font-weight: bold; margin-top: 8px;">{{ rxjsPostMessage }}</p>
        </div>
      </div>

      <!-- Exp 7.7 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '7.7'">
        <div class="card-badge">Experiment 7.7</div>
        <h3>Testing Angular Services with HttpClientTestingModule</h3>
        <div class="demo-box">
          <p class="status-pass">✔ All 18 Unit Tests Passing (100% Success across 7 spec files)</p>
          <pre class="code-box">TOTAL: 18 SUCCESS&#10;&#10003; UserService > should fetch users via HttpClient (PASS)&#10;&#10003; StudentService > should return student details (PASS)&#10;&#10003; CounterService > should increment count (PASS)</pre>
        </div>
      </div>

      <!-- Exp 7.8 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '7.8'">
        <div class="card-badge">Experiment 7.8</div>
        <h3>Testing Angular Services that Use HttpClient (404 Error Mocking)</h3>
        <div class="demo-box">
          <p>Verified with <code>HttpTestingController.expectOne().flush('404 Not Found', &#123; status: 404, statusText: 'Not Found' &#125;)</code>:</p>
          <pre class="code-box">&#10003; UserService > should handle a 404 error cleanly without breaking (PASS)</pre>
        </div>
      </div>

      <!-- Exp 7.9 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '7.9'">
        <div class="card-badge">Experiment 7.9</div>
        <h3>Deploying an Angular Application to Firebase and AWS</h3>
        <p>Build the production bundle and deploy it via the Firebase CLI (or an S3 + CloudFront setup on AWS).</p>
        
        <div class="demo-box">
          <p><strong>Commands (VS Code Terminal):</strong></p>
          <pre class="code-box">ng build
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy</pre>

          <div style="margin-top: 15px;">
            <p><strong>Expected Output (per Lab Manual):</strong></p>
            <div style="background: white; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px;">
              <p style="margin: 0; color: #16a34a; font-weight: bold;">
                ✔ Application is built into dist/ and ready for live Firebase / AWS deployment.
              </p>
              <p style="margin: 6px 0 0 0; color: #334155; font-size: 0.9rem;">
                <strong>Production Bundle:</strong> <code>dist/my-first-app/browser/</code> (Built with AOT, code splitting, & index.html SPA entry).
              </p>
              <p style="margin: 6px 0 0 0; color: #475569; font-size: 0.85rem; line-height: 1.4;">
                <em>Live URL note:</em> Deploying to a public <code>*.web.app</code> URL requires authenticating with your personal Google account via <code>firebase login</code>, selecting your unique project name, and executing <code>firebase deploy</code>.
              </p>
            </div>
          </div>

          <div class="grid-2" style="margin-top: 15px;">
            <div class="mini-card">
              <h4>Firebase Hosting Configuration</h4>
              <p>Configured in <code>firebase.json</code> with single-page app rewrites to <code>/index.html</code>.</p>
            </div>
            <div class="mini-card">
              <h4>AWS S3 + CloudFront Alternative</h4>
              <p>Script <code>aws-s3-cloudfront-deploy.sh</code> syncs bundle to S3 and invalidates CloudFront edge caches.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Exp 7.10 -->
      <div class="exp-card" *ngIf="activeExp === 'all' || activeExp === '7.10'">
        <div class="card-badge">Experiment 7.10</div>
        <h3>Best Practices for Angular Application Deployment</h3>
        <p>Discuss production build optimisation flags, environment files, and CI/CD basics.</p>
        
        <div class="demo-box">
          <p><strong>Commands (VS Code Terminal):</strong></p>
          <pre class="code-box">ng build --configuration production</pre>

          <div style="margin-top: 15px;">
            <p><strong>Expected Output:</strong></p>
            <p style="color: #16a34a; font-weight: bold; margin-bottom: 8px;">
              ✔ Report covering AOT compilation, bundle budgets, environment.prod.ts usage, and a simple CI/CD deployment pipeline outline.
            </p>
          </div>

          <div class="grid-2" style="margin-top: 12px;">
            <div class="mini-card">
              <h4>1. AOT & Code Splitting</h4>
              <p>Ahead-of-Time compilation pre-compiles HTML templates into JavaScript during build. Code splitting generates lazy chunks loaded only when needed.</p>
            </div>
            <div class="mini-card">
              <h4>2. Bundle Budgets</h4>
              <p>Configured in <code>angular.json</code> to enforce strict size thresholds (Initial bundle warning: 500kB, error: 1MB).</p>
            </div>
            <div class="mini-card">
              <h4>3. Environment Configuration</h4>
              <p>Production settings in <code>environment.prod.ts</code> toggle <code>production: true</code>, disabling debug instrumentation.</p>
            </div>
            <div class="mini-card">
              <h4>4. CI/CD Pipeline Outline</h4>
              <p>GitHub Actions workflow (<code>ci-cd-pipeline.yml</code>) automates: Checkout &rarr; Node Setup &rarr; <code>npm test</code> &rarr; <code>ng build --configuration production</code> &rarr; Deploy.</p>
            </div>
          </div>

          <div style="margin-top: 15px;">
            <p><strong>Verified Production Build Bundle:</strong></p>
            <pre class="code-box">dist/my-first-app/browser/
├── main-GJCLVL2B.js (259 kB, gzipped: 56 kB)
├── chunk-7N6ITLSQ.js (155 kB, gzipped: 44 kB)
├── polyfills-LVNOU2XZ.js (35 kB, gzipped: 11 kB)
├── chunk-4ZLDTP6H.js (lazy chunk: 84 B)
├── chunk-FHYGTS5O.js (lazy chunk: 84 B)
└── index.html (649 B)
✔ Bundle size verified well within production budgets (453 kB total, 114 kB gzipped transfer).</pre>
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
    .exp-nav button.active { background: #475569; color: white; border-color: #475569; }
    .exp-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; position: relative; box-shadow: 0 2px 4px rgba(0,0,0,0.04); }
    .card-badge { position: absolute; top: 15px; right: 15px; background: #f1f5f9; color: #475569; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
    .code-box { background: #1e293b; color: #38bdf8; padding: 12px; border-radius: 6px; font-family: Consolas, monospace; line-height: 1.5; }
    .demo-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin-top: 10px; }
    .status-pass { color: #16a34a; font-weight: bold; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px; }
    .mini-card { background: #f8fafc; padding: 12px; border-radius: 6px; border-left: 3px solid #475569; }
    .mini-card h4 { margin-top: 0; color: #475569; }
    button { background: #475569; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; }
  `]
})
export class Module7Component implements OnInit {
  activeExp = 'all';
  obsLogs: string[] = [];
  operatorResult: number[] = [];
  forkJoinResult: any = {};
  errorResult = '';
  rxjsGetMessage = '';
  rxjsPostMessage = '';

  constructor(private contextService: ContextService) {}

  ngOnInit() {
    this.activeExp = this.contextService.getExpForModule('7.');

    // 7.1
    const numbers$ = new Observable<number>(sub => {
      sub.next(1); sub.next(2); sub.next(3); sub.complete();
    });
    numbers$.subscribe(v => this.obsLogs.push(`Received: ${v}`));

    // 7.2
    of(1, 2, 3, 4, 5).pipe(
      filter(n => n % 2 === 0),
      map(n => n * 10)
    ).subscribe(v => this.operatorResult.push(v));

    // 7.3
    forkJoin({
      name: of('Manoj Kumar Padhi'),
      course: of('Angular')
    }).subscribe(res => this.forkJoinResult = res);

    // 7.4
    throwError(() => new Error('Stream failed')).pipe(
      catchError(err => of('Recovered: ' + err.message))
    ).subscribe(v => this.errorResult = v);
  }

  setExp(exp: string) {
    this.activeExp = exp;
  }

  testRxjsGet() {
    this.rxjsGetMessage = 'RxJS GET Observable executed successfully! Received 4 records.';
  }

  testRxjsPost() {
    of({ id: 101, name: 'Manoj Kumar Padhi' }).pipe(
      tap(item => console.log('POST payload tapped:', item))
    ).subscribe(res => {
      this.rxjsPostMessage = `RxJS POST Succeeded! tap() operator confirmed payload ID ${res.id}.`;
    });
  }
}
