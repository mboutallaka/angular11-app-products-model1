import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TypesOfOperation} from '../../../states/products.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  @Output() productEventEmitter : EventEmitter<any>=new EventEmitter()


  constructor() {

  }

  ngOnInit() {

  }

  OnsearchProducts(dataForm: any) {
    this.productEventEmitter.emit({type:TypesOfOperation.SEARCH_PRODUCTS,payload:dataForm})
  }

  AddNewProduct() {
    this.productEventEmitter.emit({type:TypesOfOperation.GET_New_PRODUCTS})
  }

  OnAvailableProducts() {
    this.productEventEmitter.emit({type:TypesOfOperation.GET_AVAILABLE_PRODUCTS})
  }

  OnSelectedProducts() {
    this.productEventEmitter.emit({type:TypesOfOperation.GET_SELECTED_PRODUCTS})
  }

  OnGetAllProdcuts() {
   this.productEventEmitter.emit({type:TypesOfOperation.GET_ALL_PRODUCTS})
  }
}
