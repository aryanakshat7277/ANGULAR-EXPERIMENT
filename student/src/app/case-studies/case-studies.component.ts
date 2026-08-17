import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.css'
})
export class CaseStudiesComponent {
  caseStudies = [
    {
      title: 'Case Study 1: E-Commerce Platform',
      flow: 'Product (Parent) -> Cart (Child)',
      description: 'Product details sent to Cart via @Input(); item selection emitted back to Product via @Output().'
    },
    {
      title: 'Case Study 2: Student Portal',
      flow: 'Teacher (Parent) -> Student (Child)',
      description: 'Teacher component broadcasts assignment updates via @Input(); Student emits completion status via EventEmitter.'
    },
    {
      title: 'Case Study 3: Hospital Management',
      flow: 'Doctor (Parent) -> Patient (Child)',
      description: 'Doctor accesses Patient vital metrics via @ViewChild and updates medical prescription notes.'
    }
  ];
}
