import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-demo',
  standalone: true,
  templateUrl: './property-binding-demo.html',
  styleUrl: './property-binding-demo.css'
})
export class PropertyBindingDemoComponent {
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isButtonDisabled: boolean = true;
  inputValue: string = 'Default text';
}
