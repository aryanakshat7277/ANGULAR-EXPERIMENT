import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture-seminar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture-seminar.component.html',
  styleUrl: './architecture-seminar.component.css'
})
export class ArchitectureSeminarComponent {
  pillars = [
    { title: 'Components & Templates', summary: 'Render the UI; receive data via @Input, emit events via @Output; composed into a tree.' },
    { title: 'Dependency Injection', summary: 'Angular\'s injector supplies service instances to components/services automatically based on providers.' },
    { title: 'Modules / Standalone APIs', summary: 'Group or declare related components and define what is available for injection and lazy loading.' },
    { title: 'Routing & Navigation', summary: 'Maps URLs to components/modules, drives navigation, and triggers lazy loading of feature areas.' }
  ];
}
