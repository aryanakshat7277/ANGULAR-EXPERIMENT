import { Routes } from '@angular/router';
import { LauncherComponent } from './launcher/launcher';
import { Module1Component } from './modules/module1';
import { Module2Component } from './modules/module2';
import { Module3Component } from './modules/module3';
import { Module4Component } from './modules/module4';
import { Module5Component } from './modules/module5';
import { Module6Component } from './modules/module6';
import { Module7Component } from './modules/module7';
import { Student } from './student/student';
import { Course } from './course/course';
import { Parent } from './parent/parent';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LauncherComponent },
  { path: 'module1', component: Module1Component },
  { path: 'module2', component: Module2Component },
  { path: 'module3', component: Module3Component },
  { path: 'module4', component: Module4Component },
  { path: 'module5', component: Module5Component },
  {
    path: 'module6',
    component: Module6Component,
    children: [
      {
        path: 'result',
        loadComponent: () => import('./result/result').then(m => m.Result)
      }
    ]
  },
  { path: 'module7', component: Module7Component },
  {
    path: 'student',
    component: Student,
    children: [
      {
        path: 'result',
        loadComponent: () => import('./result/result').then(m => m.Result)
      }
    ]
  },
  {
    path: 'course',
    canActivate: [authGuard],
    loadComponent: () => import('./course/course').then(m => m.Course)
  },
  { path: 'parent', component: Parent },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: '' }
];
