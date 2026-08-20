import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-doc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-doc.component.html',
  styleUrl: './lifecycle-doc.component.css'
})
export class LifecycleDocComponent {
  lifecycleHooks = [
    { hook: 'ngOnChanges()', condition: 'Called whenever a bound @Input() property changes.', useCase: 'Re-fetching data when an input ID changes.' },
    { hook: 'ngOnInit()', condition: 'Called once, after the first ngOnChanges.', useCase: 'Initial data fetching, setting up component state.' },
    { hook: 'ngDoCheck()', condition: 'Called on every change-detection run.', useCase: 'Custom change detection logic not covered by ngOnChanges.' },
    { hook: 'ngAfterContentInit()', condition: 'Called once after content projected via <ng-content> is initialized.', useCase: 'Reacting to projected content.' },
    { hook: 'ngAfterContentChecked()', condition: 'Called after every check of projected content.', useCase: 'Validating projected content state.' },
    { hook: 'ngAfterViewInit()', condition: 'Called once after the component\'s view (and child views) are initialized.', useCase: 'Accessing @ViewChild elements.' },
    { hook: 'ngAfterViewChecked()', condition: 'Called after every check of the component\'s view.', useCase: 'Responding to view updates.' },
    { hook: 'ngOnDestroy()', condition: 'Called just before the component is destroyed.', useCase: 'Unsubscribing from observables, clearing timers.' }
  ];
}
