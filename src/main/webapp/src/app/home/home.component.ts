import { Component, computed, inject } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { NavbarComponent } from "../navbar/navbar.component";
import { ActionComponent } from "../action/action.component";
import { ActionPosition } from "../constants/actionPosition";
import { ProductCardComponent } from "../product-card/product-card.component";
import { DataService } from "../services/data.service";
import { Product } from "../models/product";
import { toSignal } from "@angular/core/rxjs-interop";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'sgi-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NavbarComponent,
    ActionComponent,
    ProductCardComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  protected readonly ActionPosition = ActionPosition;
  protected products = toSignal(inject(DataService).getProducts(), {initialValue: [] as Product[]});
  protected myItems = computed(() => this.products().filter((product) => product.myItem));
}
