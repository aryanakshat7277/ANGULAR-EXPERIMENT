import { Routes } from '@angular/router';
import { Course } from './course';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'course', component: Course, canActivate: [authGuard] }
];
