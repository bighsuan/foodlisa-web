import { Component, OnInit } from '@angular/core';
tores;
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  stores: IProduct[] = [];
  isLoading = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((stores: IProduct[]) => (this.stores = stores));
  }

  delProduct(id: number): void {
    Swal.fire('OK', '刪除成功');
    this.productService.deleteProduct(id).subscribe(() => this.getProducts());
  }
}
