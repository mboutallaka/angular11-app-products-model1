import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {Router} from '@angular/router';
import {TypesOfOperation} from '../../states/products.state';
import {EventDriverService} from '../../states/event.driver.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  productsformgroup:FormGroup
  submitted: boolean=false;
  constructor(private fb:FormBuilder ,private productser:ProductsService,
  private  eventDriverService:EventDriverService) { }

  ngOnInit() : void{
    this.productsformgroup=this.fb.group(
      {
        name:["",Validators.required],
        price:[0,Validators.required],
        quantity:[0,Validators.required],
        selected:[true,Validators.required],
        available:[true,Validators.required],
      }
    )
  }

  Onsave(productsformgroup) {
    this.submitted=true
    if(this.productsformgroup.invalid)
      return
  this.productser.saveProducts(this.productsformgroup.value)
   .subscribe(data=>
   {
     this.eventDriverService.publishevent({type:TypesOfOperation.PRODUCT_ADDED})
    alert("saving data")
   })
  }
}
