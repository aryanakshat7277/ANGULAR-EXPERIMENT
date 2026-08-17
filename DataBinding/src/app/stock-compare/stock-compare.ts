import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-compare',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './stock-compare.html',
  styleUrl: './stock-compare.css'
})
export class StockCompareComponent {
  // Approach A: manual one-way + event
  manualStock: number = 50;
  updateStock(value: string): void {
    this.manualStock = Number(value);
  }

  // Approach B: ngModel
  ngModelStock: number = 50;

  // Approach C: Reactive FormControl
  stockControl = new FormControl(50);
}
