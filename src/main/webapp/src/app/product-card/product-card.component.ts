import { Component, input } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'sgi-product-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  title = input.required<string>();
  description = input.required<string>();
  image = input.required<string>();
}
