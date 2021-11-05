import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {VehicleModel} from '../model/vehicle.model';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {HttpResponseModel} from '../../shared/model/HttpResponse.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private url = environment.baseUrl + 'vehicule';
  subject: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  public getByContribuable(id: number): Observable<any> {
    return this.subject.asObservable();
  }

  load(id: number) {
    this.http.get<any>(this.url).pipe(map(data => {
      console.log('vehicules: ', data);
      if (data.code === '200') {
        const vehiculeData = data.data.filter(vehicule => {
          return vehicule.proprietaire.id === id;
        });
        data.data = vehiculeData;
        this.subject.next(data);
      }
      return data;
    })).subscribe();
  }

  searchByIdNumber(idNumber: string): Observable<HttpResponseModel<VehicleModel[]>> {
    return this.http.get<HttpResponseModel<VehicleModel[]>>(this.url).pipe(map(data => {
      if (data.code === '200') {
        return data.data.filter(value => {
          return value.idNumber === idNumber;
        });
      }
      return data;
    }));
  }

  add(vehicle): Observable<HttpResponseModel<VehicleModel>> {
    return this.http.post<HttpResponseModel<VehicleModel>>(this.url, vehicle);
  }

  update(vehicle): Observable<HttpResponseModel<VehicleModel>> {
    return this.http.put<HttpResponseModel<VehicleModel>>(this.url, vehicle);
  }

  delete(id: number): Observable<HttpResponseModel<any>> {
    return this.http.delete<HttpResponseModel<any>>(this.url + '/' + id);
  }
}
