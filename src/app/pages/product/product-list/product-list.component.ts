import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../models/product';
import Swal from 'sweetalert2';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  isLoading = false;

  constructor(private productService: ProductService, private storageService: StorageService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products: IProduct[]) => (this.products = products));
  }

  delProduct(id: number): void {
    Swal.fire('OK', '刪除成功');
    this.productService.deleteProduct(id).subscribe(() => this.getProducts());
  }
}
