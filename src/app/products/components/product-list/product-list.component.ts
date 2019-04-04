import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from './product-data.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = new Array();

  constructor() { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    console.log("test init");
    console.log(PRODUCTS);
    this.products = PRODUCTS;
  }

}
