import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  contribuableDataObs: Subject<any> = new Subject<any>();
  contribuableData: any;

  vehicleDataObs: Subject<any> = new Subject<any>();
  vehicleData: any;

  driverDataObs: Subject<any> = new Subject<any>();
  driverData: any;


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

  loadDataContribuable(): any {
    return this.contribuableData;
  }

  setVehicle(data) {
    console.log('save vehicle data: ', data);
    this.vehicleData = data;
    this.vehicleDataObs.next(data);
  }

  public getVehicle(): Observable<any> {
    return this.vehicleDataObs.asObservable();
  }

  setDriver(data) {
    this.driverData = data;
    this.driverDataObs.next(data);
  }

  public getDriver(): Observable<any> {
    return this.driverDataObs.asObservable();
  }
}
