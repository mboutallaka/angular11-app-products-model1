import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {TypesOfs} from './products.state';


@Injectable({providedIn:"root"})
export class EventDriverService {

  SourceEventSubject:Subject<TypesOfs>=new Subject<TypesOfs>()
  SourceEventSubjectObservable=this.SourceEventSubject.asObservable()

  publishevent(event:TypesOfs){
    this.SourceEventSubject.next(event)

  }


}
