import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from './student-card/student-card.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { CourseListComponent } from './features/course/course-list/course-list.component';
import { StudentListComponent } from './features/student/student-list/student-list.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { LifecycleDocComponent } from './lifecycle-doc/lifecycle-doc.component';
import { StructureCompareComponent } from './structure-compare/structure-compare.component';
import { ArchitectureSeminarComponent } from './architecture-seminar/architecture-seminar.component';
import { ArchitectureCaseStudiesComponent } from './architecture-case-studies/architecture-case-studies.component';
import { CounterContainerComponent } from './counter/counter-container.component';
import { AuthService } from './core/auth.service';

export type Unit2Tab =
  | 'overview'
  | '2.1'
  | '2.2'
  | '2.3'
  | '2.4'
  | '2.5'
  | '2.6'
  | '2.7'
  | '2.8'
  | '2.9'
  | '2.10';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    StudentCardComponent,
    LifecycleDemoComponent,
    CourseListComponent,
    StudentListComponent,
    LoadingSpinnerComponent,
    LifecycleDocComponent,
    StructureCompareComponent,
    ArchitectureSeminarComponent,
    ArchitectureCaseStudiesComponent,
    CounterContainerComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular Architecture & Components (Unit 2: Experiments 2.1 - 2.10)';
  activeTab: Unit2Tab = 'overview';
  showLifecycleDemo: boolean = true;
  lifecycleCounter: number = 0;

  constructor(public authService: AuthService) {}

  selectTab(tab: Unit2Tab) {
    this.activeTab = tab;
  }
}