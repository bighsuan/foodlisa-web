import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm = this.fb.group({
    category: [''],
    name: [''],
    description: [''],
    price: [''],
    imageUrl: ['']
  });

  errMsg = {
    category: '',
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  };

  loading = false;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get controls() {
    return this.productForm.controls;
  }

  submit(): void {
    if (this.validation()) {
      Swal.fire('OK', '註冊API');
    } else {
      Swal.fire('Oops', '請檢查輸入資料');
    }
  }

  validation(): boolean {
    return true;
  }

  uploadImg(): void {}
}
