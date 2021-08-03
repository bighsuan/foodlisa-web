import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../models';
import { ProductService } from '../../../services/product.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm = this.fb.group({
    name: [''],
    price: [''],
    description: [''],
    imageUrl: ['']
  });

  errMsg = {
    name: '',
    price: '',
    description: '',
    imageUrl: ''
  };

  loading = false;

  product!: IProduct;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') != null) {
      let id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService
      .getProduct(id)
      .subscribe(
        product => this.setProduct(product),
        error => Swal.fire('Oops', '查詢失敗')
      );
  }

  setProduct(product: IProduct): void {
    this.product = product;

    this.productForm.get('name')!.setValue(this.product.name);
    this.productForm.get('price')!.setValue(this.product.price);
    this.productForm.get('description')!.setValue(this.product.description);
    this.productForm.get('imageUrl')!.setValue(this.product.imageUrl);
  }

  get value() {
    return this.productForm.value;
  }

  submit(): void {
    if (this.validation()) {
      // 修改
      if (this.route.snapshot.paramMap.get('id') != null) {
        this.productService
          .updateProduct(this.product.id, this.value)
          .subscribe(
            product =>
              Swal.fire({
                title: 'OK',
                text: '修改成功',
                confirmButtonText: `返回商品列表`
              }).then(result => {
                this.location.back();
              }),
            error => Swal.fire('Oops', '修改失敗')
          );
      }
      // 新增
      else {
        this.productService.addProduct(this.value).subscribe(
          product =>
            Swal.fire({
              title: 'OK',
              text: '新增成功',
              confirmButtonText: `返回商品列表`
            }).then(result => {
              this.location.back();
            }),
          error => Swal.fire('Oops', '新增失敗')
        );
      }
    } else {
      Swal.fire('Oops', '請檢查輸入資料');
    }
  }

  validation(): boolean {
    return true;
  }

  back() {
    // this.location.back();
    this.router.navigate(['/products']);
  }
}
