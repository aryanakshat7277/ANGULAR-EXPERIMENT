import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent } from './parent/parent';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { SeminarComponent } from './seminar/seminar.component';
import { DataService } from './data.service';

export type Chapter12Tab =
  | 'overview'
  | '4.1'
  | '4.2'
  | '4.3'
  | '4.4'
  | '4.5'
  | '4.6'
  | '4.7'
  | '4.8'
  | '4.9'
  | '4.10';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Parent,
    DashboardComponent,
    CaseStudiesComponent,
    SeminarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular Component Communication (Chapter 12: Experiments 4.1 - 4.10)';
  activeTab: Chapter12Tab = 'overview';
  newMessageInput: string = '';

  constructor(public dataService: DataService) {}

  selectTab(tab: Chapter12Tab) {
    this.activeTab = tab;
  }

  updateServiceMessage(msg: string) {
    if (msg.trim()) {
      this.dataService.changeMessage(msg);
      this.dataService.updateSignal(msg);
    }
  }
}