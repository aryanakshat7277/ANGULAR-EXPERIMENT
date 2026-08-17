import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from './has-role.directive';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, HasRoleDirective],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.css'
})
export class CaseStudiesComponent {
  // Case Study A: Large list with trackBy
  items = Array.from({ length: 50 }, (_, i) => ({ id: i, label: `Item ${i}` }));

  trackById(index: number, item: { id: number }): number {
    return item.id;
  }

  refreshFirstItem(): void {
    this.items = [{ id: 0, label: 'Item 0 (updated)' }, ...this.items.slice(1)];
  }
}
