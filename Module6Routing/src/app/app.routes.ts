import { Routes } from '@angular/router';
import { Student } from './student/student';
import { Result } from './result/result';
import { Login } from './login/login';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  {
    path: 'student',
    component: Student,
    children: [
      { path: 'result', component: Result } // Exp 6.5 Child Route
    ]
  },
  {
    path: 'course',
    loadComponent: () => import('./course/course').then(m => m.Course), // Exp 6.4 Lazy Loading
    canActivate: [authGuard] // Exp 6.3 Route Guard
  },
  { path: 'login', component: Login }
];
