import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {VehicleModel} from '../model/vehicle.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {HttpResponseModel} from '../../shared/model/HttpResponse.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private url = environment.baseUrl + 'vehicule';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<any> {
    return this.http.get<any>(this.url).pipe(map(data => {
      const orderedData = data.data.map(value => {
        console.log(value);
        const vehicle = {
          id: value.id,
          brand: value.brand,
          modele: value.modele,
          idNumber: value.idNumber,
          carteRoseId: value.carteRoseId,
          voletJauneId: value.voletJauneId
        };
        console.log(vehicle);
        return vehicle;
      });
      data.data = orderedData;
      return data;
    }));
  }

  getListByContribuable(id: number): Observable<any> {
    return this.http.get<any>(this.url).pipe(map(data => {
      console.log('vehicules: ', data);
      if (data.code === '200') {
        const vehiculeData = data.data.filter(vehicule => {
          return vehicule.proprietaire.id === id;
        });
        data.data = vehiculeData;
      }
      return data;
    }));
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

  remove(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
