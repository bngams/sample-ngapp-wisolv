import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // dependency injection - DI
  // class => @Injectable => provider => DI
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // http request 
    // this.http.get('http://localhost:3004/products').toPromise().then((data) => {
    //   console.log(data);
    // })

    // let observer = {
    //   next: (data) => { this.products = data },
    //   complete: () => { },
    //   error: (e) => { }
    // }
    // let request = this.http.get('http://localhost:3004/products');
    // request.subscribe(observer);

    // this.http.get<Product[]>('http://localhost:3004/products').subscribe(
    //  (data) => { this.products = data; }
    // )

    return this.http.get<Product[]>(environment.apiBaseUrl + '/products');
  }

  getProduct(id: number) {
    //
  }

  postProduct(product: Product) {
    //
  }

  updateProduct(product: Product) {
    //
  }
}
