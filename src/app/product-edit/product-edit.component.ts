import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product | undefined;
  useDefault = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.productService
      .getProduct(id)
      .subscribe((product: Product|undefined) => (this.product = product));
  }

  save(): void {
    if (this.product) {
      const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

      this.productService
        .updateProduct(id, this.product)
        .subscribe(() => this.location.back());
    }
  }

  checkBox(): void {
    this.useDefault = !this.useDefault;
    if (this.product) {
      if (this.useDefault)
        this.product.imageUrl =
          'https://picsum.photos/id/' +
          Math.floor(Math.random() * 1000) +
          '/400';
      else this.product.imageUrl = '';
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
