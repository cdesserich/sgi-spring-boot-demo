import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductCardComponent } from "../product-card/product-card.component";
import { toSignal } from "@angular/core/rxjs-interop";
import { DataService } from "../services/data.service";
import { Product } from "../models/product";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'sgi-products',
  standalone: true,
  imports: [
    NavbarComponent,
    ProductCardComponent,
    FooterComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  protected products = toSignal(inject(DataService).getProducts(), {initialValue: [] as Product[]});
}
