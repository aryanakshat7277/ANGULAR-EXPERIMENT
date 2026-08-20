import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyBindingDemoComponent } from './property-binding-demo/property-binding-demo';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo';
import { TwoWayDemoComponent } from './two-way-demo/two-way-demo';
import { DirectivesDemoComponent } from './directives-demo/directives-demo';

export type Unit3Tab = '3.1' | '3.2' | '3.3' | '3.4';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PropertyBindingDemoComponent,
    EventBindingDemoComponent,
    TwoWayDemoComponent,
    DirectivesDemoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Angular Data Binding & Directives (Unit 3: Experiments 3.1 - 3.4)';
  activeTab: Unit3Tab = '3.1';

  selectTab(tab: Unit3Tab) {
    this.activeTab = tab;
  }
}