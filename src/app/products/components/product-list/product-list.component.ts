import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from './product-data.mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = new Array();
  products$: Observable<Product[]>;

  // dependency injection - DI
  // class => @Injectable => provider => DI
  // DI Process
  // if exists(ProductService)
  //   => return productService
  // else
  //   new ProductService();
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // loadProductsFromMock();
    this.loadProducts();
  }

  loadProducts() {
    this.products$ = this.productService.list();
  }

  loadProductsFromMock() {
    console.log("test init");
    console.log(PRODUCTS);
    this.products = PRODUCTS;
  }

}
