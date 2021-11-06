import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpResponseModel } from '../../shared/model/HttpResponse.model';

@Injectable({
  providedIn: 'root',
})
export class TaxeService {
  private url = environment.baseUrl + 'taxe';

  holderTaxes: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) {}

   public getAllList() {
    return this.http.get<HttpResponseModel<any>>(this.url+"/infos");
  }

  public loadTaxes() {
    this.http
      .get<HttpResponseModel<any>>(this.url)
      .subscribe((httpResponse) => {
        console.log(httpResponse);
        if (httpResponse.code === '200') {
          this.holderTaxes.next(httpResponse.data);
        }
      });
  }

  public getList() {
    return this.holderTaxes.value;
  }

  public getAll(contrId): Observable<HttpResponseModel<any>> {
    return this.http.get<HttpResponseModel<any>>(
      this.url + '/byOwner/' + contrId
    );
  }

  saveTaxeVehicle(tv): Observable<HttpResponseModel<any>> {
    return this.http.post<HttpResponseModel<any>>(
      this.url + '/payement?from=system',
      tv
    );
  }

  public getReport(): Observable<HttpResponseModel<any>> {
    return this.http.get<HttpResponseModel<any>>(this.url + '/report');
  }
}
