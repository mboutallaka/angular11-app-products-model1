import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TypesOfOperation} from '../../../states/products.state';
import {EventDriverService} from '../../../states/event.driver.service';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

 // @Output() productEventEmitter : EventEmitter<any>=new EventEmitter()


  constructor( private eventDriverService:EventDriverService) {

  }

  ngOnInit() {

  }

  OnsearchProducts(dataForm: any) {
    //this.productEventEmitter.emit({type:TypesOfOperation.SEARCH_PRODUCTS,payload:dataForm})
    this.eventDriverService.publishevent({type:TypesOfOperation.SEARCH_PRODUCTS,payload:dataForm})
  }

  AddNewProduct() {
    //this.productEventEmitter.emit({type:TypesOfOperation.GET_New_PRODUCTS})
    this.eventDriverService.publishevent({type:TypesOfOperation.GET_New_PRODUCTS})

  }

  OnAvailableProducts() {
    //this.productEventEmitter.emit({type:TypesOfOperation.GET_AVAILABLE_PRODUCTS})
    this.eventDriverService.publishevent({type:TypesOfOperation.GET_AVAILABLE_PRODUCTS})
  }

  OnSelectedProducts() {
    //this.productEventEmitter.emit({type:TypesOfOperation.GET_SELECTED_PRODUCTS})
    this.eventDriverService.publishevent({type:TypesOfOperation.GET_SELECTED_PRODUCTS})
  }

  OnGetAllProdcuts() {
    //this.productEventEmitter.emit({type:TypesOfOperation.GET_ALL_PRODUCTS})
    this.eventDriverService.publishevent({type:TypesOfOperation.GET_ALL_PRODUCTS})
  }
}
