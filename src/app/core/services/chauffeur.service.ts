import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponseModel} from '../../shared/model/HttpResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  private url = environment.baseUrl + 'chauffeur';
  private subjectDriver: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  load(): Observable<any> {
    return this.subjectDriver.asObservable();
  }

  public getAll(contribuableId) {
    this.http.get<HttpResponseModel<any>>(this.url + '/byOwner/' + contribuableId).pipe(map(data => {
      console.log(data);
      if (data.code === '200') {
        const drivers = data.data;
        const driverData = drivers.map(driver => {
          return {
            id: driver.id,
            name: driver.name,
            lastname: driver.lastname,
            phoneNumber: driver.phoneNumber,
            address: driver.address,
            identityId: driver.identityId,
            expireDateLicenceNumber: driver.expireDateLicenceNumber,
            licenceNumber: driver.licenceNumber,
            proprietaire: {
              id: driver.proprietaire.id
            }
          };
        });
        console.log(driverData);
        this.subjectDriver.next(driverData);
      }
    })).subscribe();
  }

  save(driver): Observable<HttpResponseModel<any>> {
    return this.http.post<HttpResponseModel<any>>(this.url, driver);
  }

  update(driver): Observable<HttpResponseModel<any>> {
    return this.http.put<HttpResponseModel<any>>(this.url, driver);
  }

  delete(id): Observable<HttpResponseModel<any>> {
    return this.http.delete<HttpResponseModel<any>>(this.url + '/' + id);
  }
}
