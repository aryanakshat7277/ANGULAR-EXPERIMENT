import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'course',
    loadComponent: () => import('./course').then(m => m.Course)
  }
];
