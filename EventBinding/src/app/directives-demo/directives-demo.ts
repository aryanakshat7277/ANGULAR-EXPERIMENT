import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.css'
})
export class DirectivesDemoComponent {
  showDetails: boolean = true;
  students = [
    { name: 'Aarav', passed: true },
    { name: 'Meera', passed: false },
    { name: 'Karan', passed: true },
  ];
  highlightColor: string = 'green';
}
