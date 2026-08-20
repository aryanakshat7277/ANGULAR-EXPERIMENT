import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from './student-card/student-card.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { CourseListComponent } from './features/course/course-list/course-list.component';

export type Unit2Tab = '2.1' | '2.2' | '2.3';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    StudentCardComponent,
    LifecycleDemoComponent,
    CourseListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular Architecture & Components (Unit 2: Experiments 2.1 - 2.3)';
  activeTab: Unit2Tab = '2.1';
  showLifecycleDemo: boolean = true;
  lifecycleCounter: number = 0;

  selectTab(tab: Unit2Tab) {
    this.activeTab = tab;
  }
}