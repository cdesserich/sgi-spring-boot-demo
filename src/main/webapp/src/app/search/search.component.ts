import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgOptimizedImage } from "@angular/common";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'sgi-search',
  standalone: true,
  imports: [
    NavbarComponent,
    NgOptimizedImage,
    FooterComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
