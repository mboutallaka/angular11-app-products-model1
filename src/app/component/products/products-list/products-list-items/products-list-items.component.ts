import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Products} from '../../../../models/products.model';
import {TypesOfOperation, TypesOfs} from '../../../../states/products.state';

@Component({
  selector: 'app-products-list-items',
  templateUrl: './products-list-items.component.html',
  styleUrls: ['./products-list-items.component.css']
})
export class ProductsListItemsComponent implements OnInit {

  @Input()product:Products
  @Output()productsEventEmitter:EventEmitter<TypesOfs>=new EventEmitter<TypesOfs>()
  constructor() { }

  ngOnInit() {
  }

  OnSelect(product: Products) {
   this.productsEventEmitter.emit({type:TypesOfOperation.SELECT_PRODUCTS,payload:product})
  }

  OnDelete(product: Products) {
    this.productsEventEmitter.emit({type:TypesOfOperation.DELETE_PRODUCTS,payload:product})
  }

  Onget(product: Products) {
    this.productsEventEmitter.emit({type:TypesOfOperation.EDIT_PRODUCTS,payload:product})
  }
}
