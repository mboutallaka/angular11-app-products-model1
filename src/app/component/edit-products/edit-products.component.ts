import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from '../../services/products.service';
import {EventDriverService} from '../../states/event.driver.service';
import {TypesOfOperation} from '../../states/products.state';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  public idproduct:number;
  public productformgroups:FormGroup;
  submitted:boolean=false;
  constructor(private ActivedRoute:ActivatedRoute ,private fb:FormBuilder,
              private productse:ProductsService,
              private eventDriverService:EventDriverService
  ) {
    this.idproduct=this.ActivedRoute.snapshot.params.id
  }

  ngOnInit():void {
    this.productse.getProducts(this.idproduct)
      .subscribe(products=>{
       this.productformgroups=this.fb.group({
          id:[products.id,Validators.required],
          name:[products.name,Validators.required],
          price:[products.price,Validators.required],
          quantity:[products.quantity,Validators.required],
          selected:[products.selected,Validators.required],
          available:[products.available,Validators.required],

        })
      })

  }

  OnUpdate() {
    this.productse.UpdateProducts(this.productformgroups.value)
      .subscribe(data=>{
        this.eventDriverService.publishevent({type:TypesOfOperation.PRODUCT_UPDATED})
        alert("succes saving")
        })


  }
}
