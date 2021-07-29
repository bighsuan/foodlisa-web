import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  postData = {
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  };
  useDefault = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.location.back();
  }

  add(): void {
    if (this.postData.name != '') {
      this.productService
        .addProduct(this.postData)
        .subscribe(() => this.location.back());
    }
  }

  checkBox(): void {
    this.useDefault = !this.useDefault;
    if (this.useDefault)
      this.postData.imageUrl =
        'https://picsum.photos/id/' + Math.floor(Math.random() * 1000) + '/400';
    else this.postData.imageUrl = '';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
