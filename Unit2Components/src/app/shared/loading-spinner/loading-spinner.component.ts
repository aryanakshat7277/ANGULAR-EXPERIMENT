import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  template: `<div class="spinner" style="padding: 6px; background: #eee; font-style: italic; border-radius: 4px;">Loading...</div>`
})
export class LoadingSpinnerComponent {}
