import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';
import { STORE } from '../../../mock-store';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  store: Store = STORE;
  products: IProduct[] = [];
  isLoading = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products: IProduct[]) => (this.products = products));
  }

  delProduct(): void {
    Swal.fire('OK', '刪除API');

    // this.productService
    //   .deleteProduct(id)
    //   .subscribe(() => );
    //   ;
  }
}
