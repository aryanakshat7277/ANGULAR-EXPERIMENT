import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyBindingDemoComponent } from './property-binding-demo/property-binding-demo';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo';
import { TwoWayDemoComponent } from './two-way-demo/two-way-demo';
import { DirectivesDemoComponent } from './directives-demo/directives-demo';
import { HighlightDirective } from './highlight.directive';
import { OrderFormComponent } from './order-form/order-form';
import { StockCompareComponent } from './stock-compare/stock-compare';
import { UnlessDirective } from './app-unless.directive';
import { TaskListComponent } from './task-list/task-list';
import { CaseStudiesComponent } from './case-studies/case-studies';

export type Unit3Tab =
  | 'overview'
  | '3.1'
  | '3.2'
  | '3.3'
  | '3.4'
  | '3.5'
  | '3.6'
  | '3.7'
  | '3.8'
  | '3.9'
  | '3.10';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PropertyBindingDemoComponent,
    EventBindingDemoComponent,
    TwoWayDemoComponent,
    DirectivesDemoComponent,
    HighlightDirective,
    OrderFormComponent,
    StockCompareComponent,
    UnlessDirective,
    TaskListComponent,
    CaseStudiesComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular Data Binding & Directives (Unit 3: Experiments 3.1 - 3.10)';
  activeTab: Unit3Tab = 'overview';
  isLoggedIn: boolean = false;

  selectTab(tab: Unit3Tab) {
    this.activeTab = tab;
  }
}