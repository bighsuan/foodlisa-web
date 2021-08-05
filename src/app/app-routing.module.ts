import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

import { StoreComponent } from './store/store.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'store/:id', component: StoreComponent },

  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  {
    path: '',
    component: SidebarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'products', // child route path
        component: ProductListComponent
      },
      {
        path: 'products/new',
        component: ProductEditComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
