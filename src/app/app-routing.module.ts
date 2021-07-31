import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SignupComponent } from './signup/signup.component';

import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', redirectTo: '/store/1', pathMatch: 'full' },
  { path: 'store/:id', component: StoreComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'product-detail/:id/edit', component: ProductEditComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
