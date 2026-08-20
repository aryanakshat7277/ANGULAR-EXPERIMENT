import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture-case-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture-case-studies.component.html',
  styleUrl: './architecture-case-studies.component.css'
})
export class ArchitectureCaseStudiesComponent {
  caseStudies = [
    {
      domain: 'Module / Library Boundaries',
      strategy: 'Divided into feature modules and Nx libraries to enforce strict encapsulation.',
      benefit: 'Reduces build times via caching and enforces domain boundary isolation.'
    },
    {
      domain: 'State Management Strategy',
      strategy: 'RxJS BehaviorSubject Service Store or NgRx Store for centralized unidirectional flow.',
      benefit: 'Eliminates data sync bugs and provides predictable debugging.'
    },
    {
      domain: 'Scalability Techniques',
      strategy: 'Route-level Lazy Loading, Code Splitting, Micro-frontends, and SSR.',
      benefit: 'Keeps initial bundle size small (e.g. 198 kB initial chunk).'
    }
  ];
}
