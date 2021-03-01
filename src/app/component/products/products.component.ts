import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Products} from '../../models/products.model';
import {Observable, of} from 'rxjs';
import {AppDataSate, DataStateEnm} from '../../states/products.state';
import {catchError, map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product$: Observable<AppDataSate<Products[]>>;
  public readonly DataStateEnm = DataStateEnm;

  constructor(private productser: ProductsService, private route: Router) {
  }

  ngOnInit() {
  }

  OnGetAllProdcuts() {
    this.product$ = this.productser.getAllProducts().pipe(
      map(data => ({datastate: DataStateEnm.LOADED, data: data})),
      startWith({datastate: DataStateEnm.LOADING}),
      catchError(err => of({datastate: DataStateEnm.ERROR, errorMessage: err.message}))
    )
  }

  OnsearchProducts(dataForm: any) {
    this.product$ = this.productser.getSearchProducts(dataForm.keyword).pipe(
      map(data => ({datastate: DataStateEnm.LOADED, data: data})),
      startWith({datastate: DataStateEnm.LOADING}),
      catchError(err => of({datastate: DataStateEnm.ERROR, errorMessage: err.message}))
    )

  }

  OnSelectedProducts() {
    this.product$ = this.productser.getSelectedProducts().pipe(
      map(data => ({datastate: DataStateEnm.LOADED, data: data})),
      startWith({datastate: DataStateEnm.LOADING}),
      catchError(err => of({datastate: DataStateEnm.ERROR, errorMessage: err.message}))
    )

  }

  OnAvailableProducts() {
    this.product$ = this.productser.getAvailableProducts().pipe(
      map(data => ({datastate: DataStateEnm.LOADED, data: data})),
      startWith({datastate: DataStateEnm.LOADING}),
      catchError(err => of({datastate: DataStateEnm.ERROR, errorMessage: err.message}))
    )
  }

  OnSelect(p: Products) {
    this.productser.getSelected(p)
      .subscribe(data => {
        p.selected = data.selected
      })
  }

  OnDelete(p) {
    let v = confirm("etes vous sur")
    if (v == true)
      this.productser.deleteProducts(p)
        .subscribe(data => {
          this.OnGetAllProdcuts()
        })


  }

  AddNewProduct() {
    this.route.navigateByUrl("/NewProduct")
  }

  Onget(p: Products) {

    this.route.navigateByUrl("/EditProduct/"+p.id)
  }
}
