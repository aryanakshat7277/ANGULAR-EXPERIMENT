import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { OverdueDirective } from './overdue.directive';
import { AutofocusDirective } from './autofocus.directive';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    OverdueDirective,
    AutofocusDirective
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {
  newTaskName: string = '';
  tasks = [
    { name: 'Submit assignment', done: false, priority: 'high', due: new Date('2026-06-20') },
    { name: 'Read chapter 4', done: true, priority: 'low', due: new Date('2026-07-10') },
    { name: 'Lab viva prep', done: false, priority: 'medium', due: new Date('2026-07-05') },
  ];

  addTask(): void {
    if (this.newTaskName.trim()) {
      this.tasks.push({
        name: this.newTaskName,
        done: false,
        priority: 'medium',
        due: new Date()
      });
      this.newTaskName = '';
    }
  }

  priorityColor(p: string): string {
    return p === 'high' ? 'crimson' : p === 'medium' ? 'darkorange' : 'green';
  }
}
