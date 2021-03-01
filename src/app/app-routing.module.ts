import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {buildServePath} from '@angular-devkit/build-angular/src/dev-server';
import {ProductsComponent} from './component/products/products.component';
import {HomeComponent} from './component/home/home.component';
import {NewProductsComponent} from './component/new-products/new-products.component';
import {EditProductsComponent} from './component/edit-products/edit-products.component';


const routes: Routes = [
  {path:"products" , component:ProductsComponent},
  {path:"" , component:HomeComponent},
  {path:"NewProduct" , component:NewProductsComponent},
  {path:"EditProduct/:id" , component:EditProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
