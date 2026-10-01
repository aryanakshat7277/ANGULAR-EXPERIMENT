import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student implements OnInit, OnDestroy {
  constructor() {
    console.log('1. Constructor called');
  }

  ngOnInit(): void {
    console.log('2. ngOnInit called - component initialised');
  }

  ngOnDestroy(): void {
    console.log('3. ngOnDestroy called - component removed');
  }
}
