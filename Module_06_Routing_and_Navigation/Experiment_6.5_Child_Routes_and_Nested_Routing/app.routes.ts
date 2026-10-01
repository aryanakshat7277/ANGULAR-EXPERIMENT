import { Routes } from '@angular/router';
import { Student } from './student';
import { Result } from './result';

export const routes: Routes = [
  {
    path: 'student',
    component: Student,
    children: [
      { path: 'result', component: Result }
    ]
  }
];
