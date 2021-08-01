import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductService } from './services/product.service';
import { StoreService } from './services/store.service';
import { MiddlewareService } from './services/middleware.service';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MemberEditComponent } from './pages/member/member-edit/member-edit.component';
import { MemberInfoComponent } from './pages/member/member-info/member-info.component';
import { SidebarParentComponent } from './components/sidebar-parent/sidebar-parent.component';
import { SidebarChildComponent } from './components/sidebar-child/sidebar-child.component';
import { MemberEditPasswordComponent } from './pages/member/member-edit-password/member-edit-password.component';

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
    StoreComponent,
    ProductEditComponent,
    TopBarComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    ProductListComponent,
    SidebarComponent,
    MemberEditComponent,
    MemberInfoComponent,
    MemberEditPasswordComponent,
    SidebarParentComponent,
    SidebarChildComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService, StoreService, MiddlewareService]
})
export class AppModule {}
