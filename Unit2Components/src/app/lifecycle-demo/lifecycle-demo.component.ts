import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-demo.component.html',
  styleUrl: './lifecycle-demo.component.css'
})
export class LifecycleDemoComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
  @Input() counter: number = 0;
  logs: string[] = [];

  private log(msg: string) {
    console.log(msg);
    this.logs.push(msg);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log(`1. ngOnChanges fired: counter = ${changes['counter']?.currentValue}`);
  }

  ngOnInit(): void {
    this.log('2. ngOnInit — component initialized');
  }

  ngDoCheck(): void {
    this.log('3. ngDoCheck — change detection run');
  }

  ngAfterViewInit(): void {
    this.log('4. ngAfterViewInit — view fully initialized');
  }

  ngOnDestroy(): void {
    this.log('5. ngOnDestroy — component about to be removed');
  }
}
