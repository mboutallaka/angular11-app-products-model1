import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {
  productsformgroup:FormGroup
  submitted: boolean=false;
  constructor(private fb:FormBuilder ,private productser:ProductsService ) { }

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
    alert("saving data")
   })
  }
}
