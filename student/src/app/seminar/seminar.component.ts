import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seminar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seminar.component.html',
  styleUrl: './seminar.component.css'
})
export class SeminarComponent {
  observationTable = [
    { technique: '@Input()', direction: 'Parent → Child', purpose: 'Send data down component hierarchy' },
    { technique: '@Output()', direction: 'Child → Parent', purpose: 'Send custom events up to parent' },
    { technique: '@ViewChild()', direction: 'Parent → Child', purpose: 'Direct access to child methods & properties' },
    { technique: '@ContentChild()', direction: 'Content Projection', purpose: 'Access projected DOM elements' }
  ];

  comparisonTable = [
    { technique: 'Input / Output', complexity: 'Low', useCase: 'Direct parent-child tree data exchange' },
    { technique: 'ViewChild / ContentChild', complexity: 'Medium', useCase: 'Direct method calls & DOM projection' },
    { technique: 'Shared Service (BehaviorSubject)', complexity: 'Medium', useCase: 'Unrelated / sibling component state' },
    { technique: 'Angular 22 Signals', complexity: 'Low/Modern', useCase: 'Fine-grained reactive state update' }
  ];

  seminarTopics = [
    '1. Input/Output Data Binding',
    '2. EventEmitter for Custom Notifications',
    '3. ViewChild Direct Queries',
    '4. ContentChild DOM Projection',
    '5. Shared Service Architecture',
    '6. RxJS Subjects vs Signals in Angular 22'
  ];
}
