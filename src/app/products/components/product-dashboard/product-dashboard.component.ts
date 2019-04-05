import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  @ViewChild(ProductListComponent)
  productListComp: ProductListComponent;

  constructor() { }

  ngOnInit() {
  }

  addProduct(product: Product) {
    this.productListComp.products.push(product);
  }

}
