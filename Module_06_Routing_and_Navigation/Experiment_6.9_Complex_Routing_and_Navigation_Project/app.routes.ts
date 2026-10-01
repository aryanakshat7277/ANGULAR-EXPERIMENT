import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home').then(m => m.Home)
  },
  {
    path: 'student',
    loadComponent: () => import('./student').then(m => m.Student),
    children: [
      {
        path: 'result',
        loadComponent: () => import('./result').then(m => m.Result)
      }
    ]
  },
  {
    path: 'course',
    canActivate: [authGuard],
    loadComponent: () => import('./course').then(m => m.Course)
  },
  {
    path: 'login',
    loadComponent: () => import('./login').then(m => m.Login)
  }
];
