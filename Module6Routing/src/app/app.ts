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

  // Exp 6.4: Lazy loading state
  lazyLoadedCourse: any = null;
  isLazyLoading: boolean = false;

  selectTab(tab: Module6Tab): void {
    this.activeTab = tab;
    // Set matching route on tab switch
    if (tab === '6.1' || tab === '6.2') {
      this.router.navigate(['/student']);
    }
  }

  // Exp 6.1: Programmatic Navigation
  navigateRoute(path: string): void {
    this.router.navigate([path]);
  }

  // Exp 6.3: Protected route test
  accessProtectedCourse(): void {
    this.router.navigate(['/course']);
  }

  // Exp 6.4: Load Lazy Course Component dynamically
  async triggerLazyLoad(): Promise<void> {
    this.isLazyLoading = true;
    const { Course } = await import('./course/course');
    this.lazyLoadedCourse = Course;
    this.isLazyLoading = false;
  }
}