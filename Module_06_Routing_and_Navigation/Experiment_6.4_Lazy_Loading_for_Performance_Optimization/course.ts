import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  template: '<h2>Lazy Loaded Course Feature</h2><p>This bundle was loaded on demand.</p>'
})
export class Course {}
