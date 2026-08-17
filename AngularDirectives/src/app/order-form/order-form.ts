import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-form.html',
  styleUrl: './order-form.css'
})
export class OrderFormComponent {
  itemName: string = '';
  quantity: number = 1;
  pricePerItem: number = 250;
  submitted: boolean = false;

  get total(): number {
    return this.quantity * this.pricePerItem;
  }

  get isFormInvalid(): boolean {
    return this.itemName.trim() === '' || this.quantity < 1;
  }

  placeOrder(): void {
    this.submitted = true;
  }
}
