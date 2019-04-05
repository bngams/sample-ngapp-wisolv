import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;

  @Output()
  addProductEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl('', []),
    })
  }

  save() {
    // submit
    console.log(this.productForm.value);
    let product: Product = this.productForm.value;
    this.addProductEvent.emit(product);
  }

}
