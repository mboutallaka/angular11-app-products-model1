import { Component, OnInit } from '@angular/core';
import {EventDriverService} from '../../states/event.driver.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  account:number=0
  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit() {
    this.eventDriverService.SourceEventSubjectObservable.subscribe(data=>{
      this.account++
    })
  }

}
