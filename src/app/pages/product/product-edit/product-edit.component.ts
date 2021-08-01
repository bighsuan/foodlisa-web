import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
// import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm = this.fb.group({
    category: [''],
    name: [''],
    price: [''],
    description: [''],
    imageUrl: ['']
  });

  errMsg = {
    category: '',
    name: '',
    price: '',
    description: '',
    imageUrl: ''
  };

  loading = false;

  constructor(private fb: FormBuilder) {}
  // private route: ActivatedRoute,
  // private productService: ProductService,
  // private location: Location

  ngOnInit() {}

  get controls() {
    return this.productForm.controls;
  }

  submit(): void {
    if (this.validation()) {
      // const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

      // this.productService
      //   .updateProduct(id, this.product)
      //   .subscribe(() => this.location.back());
      Swal.fire('OK', '修改API');
    } else {
      Swal.fire('Oops', '請檢查輸入資料');
    }
  }

  validation(): boolean {
    return true;
  }

  uploadImg(): void {}
}
