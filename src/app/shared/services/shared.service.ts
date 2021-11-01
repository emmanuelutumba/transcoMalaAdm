import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  contribuableDataObs: Subject<any> = new Subject<any>();
  contribuableData: any;

  constructor() {
  }

  setContribuable(data) {
    console.log('saving contribuable data...', data);
    this.contribuableData = data;
    this.contribuableDataObs.next(data);
  }

  public getContribuableData(): Observable<any> {
    return this.contribuableDataObs.asObservable();
  }

  loadData(): any {
    return this.contribuableData;
  }
}
