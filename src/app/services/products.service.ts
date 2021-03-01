import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Products} from '../models/products.model';

@Injectable({providedIn:"root"})
export class ProductsService {
  constructor(private http:HttpClient) {
  }
  getAllProducts():Observable<Products[]>{
    let host=environment.host
    return this.http.get<Products[]>(host+"/products")
  }
  getAvailableProducts():Observable<Products[]>{
    let host=environment.host
    return this.http.get<Products[]>(host+"/products?available=true")
  }
  getSelectedProducts():Observable<Products[]>{
    let host=environment.host
    return this.http.get<Products[]>(host+"/products?selected=true")
  }
  getSearchProducts(keyword:string):Observable<Products[]>{
    let host=environment.host
    return this.http.get<Products[]>(host+"/products?name_like="+keyword)
  }
  getSelected(products:Products):Observable<Products>{
    let host=environment.host
    products.selected=!products.selected
    return this.http.put<Products>(host+"/products/"+products.id,products)
  }
  deleteProducts(products:Products):Observable<void>{
    let host=environment.host
    products.selected=!products.selected
    return this.http.delete<void>(host+"/products/"+products.id)
  }
  saveProducts(products:Products):Observable<Products>{
    let host=environment.host
    return this.http.post<Products>(host+"/products",products)
  }
  getProducts(id:number):Observable<Products>{
    let host=environment.host
    return this.http.get<Products>(host+"/products/"+id)
  }
  UpdateProducts(product:Products):Observable<Products>{
    let host=environment.host
    return this.http.put<Products>(host+"/products/"+product.id,product)
  }

}
