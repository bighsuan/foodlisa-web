import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { StoreComponent } from './store/store.component';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/store/1', pathMatch: 'full' },
  { path: 'store/:id', component: StoreComponent },

  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'products/:id/edit', component: ProductEditComponent }
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
