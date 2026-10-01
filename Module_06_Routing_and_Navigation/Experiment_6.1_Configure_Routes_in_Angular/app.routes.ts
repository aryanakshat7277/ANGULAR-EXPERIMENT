import { Routes } from '@angular/router';
import { Student } from './student';
import { Course } from './course';

export const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'student', component: Student },
  { path: 'course', component: Course }
];
