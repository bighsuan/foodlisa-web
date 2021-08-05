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

import { MemberEditComponent } from './pages/member/member-edit/member-edit.component';
import { MemberInfoComponent } from './pages/member/member-info/member-info.component';
import { MemberEditPasswordComponent } from './pages/member/member-edit-password/member-edit-password.component';

import { StoreListComponent } from './pages/store/store-list/store-list.component';
import { StoreEditComponent } from './pages/store/store-edit/store-edit.component';
import { StoreDetailComponent } from './pages/store/store-detail/store-detail.component';

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
      },
      {
        path: 'profile',
        component: MemberInfoComponent
      },
      {
        path: 'profile/edit',
        component: MemberEditComponent
      },
      {
        path: 'profile/edit/password',
        component: MemberEditPasswordComponent
      },
      {
        path: 'stores',
        component: StoreListComponent
      },
      {
        path: 'stores/new',
        component: StoreEditComponent
      },
      {
        path: 'stores/:id',
        component: StoreDetailComponent
      },
      {
        path: 'stores/:id/edit',
        component: StoreEditComponent
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
