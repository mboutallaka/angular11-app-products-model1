import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ProductsComponent } from './component/products/products.component';
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewProductsComponent } from './component/new-products/new-products.component';
import { EditProductsComponent } from './component/edit-products/edit-products.component';
import { ProductsNavBarComponent } from './component/products/products-nav-bar/products-nav-bar.component';
import { ProductsListComponent } from './component/products/products-list/products-list.component';
import { ProductsListItemsComponent } from './component/products/products-list/products-list-items/products-list-items.component';
import { StateComponent } from './component/state/state.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    NewProductsComponent,
    EditProductsComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductsListItemsComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
