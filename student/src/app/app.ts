import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent } from './parent/parent';

export type Chapter12Tab = '4.1' | '4.2' | '4.3' | '4.4';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Parent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular Component Communication (Chapter 12: Experiments 4.1 - 4.4)';
  activeTab: Chapter12Tab = '4.1';

  selectTab(tab: Chapter12Tab) {
    this.activeTab = tab;
  }
}