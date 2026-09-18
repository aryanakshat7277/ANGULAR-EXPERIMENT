import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { AuthService } from './guards/auth.service';
import { Student } from './student/student';

export type Module6Tab = '6.1' | '6.2' | '6.3' | '6.4' | '6.5';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive, Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular Module 6: Routing & Navigation (Experiments 6.1 - 6.5)';
  activeTab: Module6Tab = '6.1';

  router = inject(Router);
  authService = inject(AuthService);

  lazyLoadedCourse: any = null;

  selectTab(tab: Module6Tab): void {
    this.activeTab = tab;
    if (tab === '6.1' || tab === '6.2') {
      this.router.navigate(['/student']);
    }
  }

  navigateRoute(path: string): void {
    this.router.navigate([path]);
  }

  accessProtectedCourse(): void {
    this.router.navigate(['/course']);
  }

  async triggerLazyLoad(): Promise<void> {
    const { Course } = await import('./course/course');
    this.lazyLoadedCourse = Course;
  }
}