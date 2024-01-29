import { Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { ProductsComponent } from "./products/products.component";
import { SearchComponent } from "./search/search.component";

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'search', component: SearchComponent},
  {path: 'products', component: ProductsComponent}
];
