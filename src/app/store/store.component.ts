import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
import { STORE } from '../mock-store';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  store: Store = STORE;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe(products => (this.products = products));
  }
}
