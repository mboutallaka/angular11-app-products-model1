import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {AppDataSate, DataStateEnm, TypesOfOperation, TypesOfs} from '../../../states/products.state';
import {Products} from '../../../models/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input()productsdeux$: Observable<AppDataSate<Products[]>>;
  @Output()productEventEmitterdeux:EventEmitter<TypesOfs>=new EventEmitter<TypesOfs>()
  public readonly DataStateEnm = DataStateEnm;


  constructor() { }

  ngOnInit() {
  }

  OnSelect(p: Products) {
  this.productEventEmitterdeux.emit({type:TypesOfOperation.SELECT_PRODUCTS,payload:p})
  }

  OnDelete(p: Products) {
    this.productEventEmitterdeux.emit({type:TypesOfOperation.DELETE_PRODUCTS,payload:p})
  }

  Onget(p: Products) {
    this.productEventEmitterdeux.emit({type:TypesOfOperation.EDIT_PRODUCTS,payload:p})
  }


  OnSearch($event: TypesOfs) {
    this.productEventEmitterdeux.emit($event)
  }
}
