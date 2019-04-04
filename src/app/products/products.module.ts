import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ProductDashboardComponent, ProductListComponent, ProductFormComponent, ProductCardComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
