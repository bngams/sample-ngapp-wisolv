import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResourceService } from 'src/app/shared/api/resource.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ResourceService<number, Product> {

  // dependency injection - DI
  // class => @Injectable => provider => DI
  constructor(private http: HttpClient) {
    super(http, 'products');
  }
}
