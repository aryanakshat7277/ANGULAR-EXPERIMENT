import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContextService } from '../services/context.service';

interface ModuleCard {
  id: string;
  num: number;
  title: string;
  desc: string;
  range: string;
  color: string;
}

@Component({
  selector: 'app-launcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="launcher-container">
      <div class="launcher-hero">
        <h2>Angular Experiments Launcher</h2>
        <p>Select any module below to host and run its experiments:</p>
      </div>

      <div class="modules-grid">
        <div *ngFor="let m of modules" class="module-card" [style.border-top-color]="m.color">
          <div class="card-header">
            <span class="module-tag" [style.background-color]="m.color">Module {{ m.num }}</span>
            <span class="range-tag">{{ m.range }}</span>
          </div>
          <h3>{{ m.title }}</h3>
          <p>{{ m.desc }}</p>
          <button (click)="launch(m.id)" [style.background-color]="m.color">
            Host Module {{ m.num }} &rarr;
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .launcher-container {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      padding: 10px 0;
    }
    .launcher-hero {
      text-align: center;
      margin-bottom: 28px;
    }
    .launcher-hero h2 {
      color: #1e3c72;
      font-size: 1.8rem;
      margin: 0 0 8px 0;
    }
    .launcher-hero p {
      color: #475569;
      font-size: 1rem;
      margin: 0;
    }
    .modules-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
    }
    .module-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-top: 4px solid #1976d2;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
    }
    .module-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 14px rgba(0,0,0,0.08);
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    .module-tag {
      color: white;
      font-weight: bold;
      font-size: 0.78rem;
      padding: 3px 10px;
      border-radius: 12px;
      text-transform: uppercase;
    }
    .range-tag {
      font-size: 0.8rem;
      color: #64748b;
      font-weight: 500;
    }
    .module-card h3 {
      color: #0f172a;
      font-size: 1.15rem;
      margin: 0 0 8px 0;
    }
    .module-card p {
      color: #64748b;
      font-size: 0.9rem;
      line-height: 1.4;
      margin: 0 0 16px 0;
      flex-grow: 1;
    }
    button {
      color: white;
      border: none;
      padding: 10px 18px;
      border-radius: 6px;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
      transition: opacity 0.2s;
    }
    button:hover {
      opacity: 0.9;
    }
  `]
})
export class LauncherComponent implements OnInit {
  modules: ModuleCard[] = [
    {
      id: 'module1',
      num: 1,
      title: 'Introduction & TypeScript Basics',
      desc: 'Node.js, Angular CLI setup, TypeScript fundamentals, types, classes, and interfaces.',
      range: 'Exp 1.1 – 1.10',
      color: '#0284c7'
    },
    {
      id: 'module2',
      num: 2,
      title: 'Angular Architecture',
      desc: 'Component architecture, lifecycle hooks (OnInit, OnDestroy), modules, and modular structure.',
      range: 'Exp 2.1 – 2.10',
      color: '#2563eb'
    },
    {
      id: 'module3',
      num: 3,
      title: 'Data Binding & Directives',
      desc: 'Interpolation, property binding, event binding, two-way binding, and custom directives.',
      range: 'Exp 3.0 – 3.10',
      color: '#7c3aed'
    },
    {
      id: 'module4',
      num: 4,
      title: 'Component Communication',
      desc: '@Input, @Output, EventEmitter, ViewChild, parent-child interaction, and BehaviorSubject.',
      range: 'Exp 4.1 – 4.10',
      color: '#059669'
    },
    {
      id: 'module5',
      num: 5,
      title: 'Services, DI & HTTP Client',
      desc: 'Injectable services, singleton/scoped DI, Signals state, and HttpClient REST CRUD.',
      range: 'Exp 5.1 – 5.10',
      color: '#d97706'
    },
    {
      id: 'module6',
      num: 6,
      title: 'Routing & Navigation',
      desc: 'RouterLink, RouterOutlet, route guards, nested child routes, and programmatic navigation.',
      range: 'Exp 6.1 – 6.10',
      color: '#dc2626'
    },
    {
      id: 'module7',
      num: 7,
      title: 'RxJS, Testing & Deployment',
      desc: 'Observables, pipe operators, error handling, HttpClientTestingModule, and AOT build.',
      range: 'Exp 7.1 – 7.10',
      color: '#475569'
    }
  ];

  constructor(private router: Router, private contextService: ContextService) {}

  async ngOnInit() {
    const ctx = await this.contextService.init();
    if (ctx && ctx.activeModule) {
      this.router.navigate([ctx.activeModule]);
    }
  }

  launch(moduleId: string) {
    this.router.navigate([moduleId]);
  }
}
