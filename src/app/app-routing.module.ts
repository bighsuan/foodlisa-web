import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { StoreComponent } from './store/store.component';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { MemberEditComponent } from './pages/member/member-edit/member-edit.component';
import { MemberInfoComponent } from './pages/member/member-info/member-info.component';
import { MemberEditPasswordComponent } from './pages/member/member-edit-password/member-edit-password.component';
import { ProductDetailComponent } from './pages/product/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'store/:id', component: StoreComponent },

  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  {
    path: '',
    component: SidebarComponent,
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
      },
      {
        path: 'profile',
        component: MemberInfoComponent
      },
      {
        path: 'members/:id/edit',
        component: MemberEditComponent
      },
      {
        path: 'members/:id/edit/password',
        component: MemberEditPasswordComponent
      }
    ]
  }
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
