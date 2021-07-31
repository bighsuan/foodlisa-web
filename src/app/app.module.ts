import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StoreComponent } from './store/store.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductService } from './services/product.service';
import { StoreService } from './services/store.service';
import { MiddlewareService } from './services/middleware.service';
import { ProductListComponent } from './pages/productproduct-list/product-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductDetailComponent,
    StoreComponent,
    ProductEditComponent,
    TopBarComponent,
    ProductAddComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    ProductListComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService, StoreService, MiddlewareService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
