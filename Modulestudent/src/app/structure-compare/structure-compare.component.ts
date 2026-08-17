import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structure-compare',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structure-compare.component.html',
  styleUrl: './structure-compare.component.css'
})
export class StructureCompareComponent {
  approaches = [
    {
      approach: 'Flat (Type-Based)',
      observation: 'Fast to set up; files for Student feature scattered across 3 folders; deletion requires touching multiple directories.',
      bestFor: 'Small demos, prototypes'
    },
    {
      approach: 'Feature-Based',
      observation: 'All Student files under one folder; quick to locate and delete; minimal extra setup.',
      bestFor: 'Most medium-large apps'
    },
    {
      approach: 'Domain-Driven (Monorepo/Nx)',
      observation: 'Most reusable across apps; clean enforced boundaries; requires Nx/workspace tooling setup first.',
      bestFor: 'Large enterprise, multi-app platforms'
    }
  ];
}
