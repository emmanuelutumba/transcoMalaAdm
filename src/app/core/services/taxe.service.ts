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
  subjectTaxes: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {}

  public getAllList() {
    return this.http.get<HttpResponseModel<any>>(this.url + '/infos');
  }

  public loadData() {
    return this.subjectTaxes.asObservable();
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
    return this.http.get<HttpResponseModel<any>>(this.url).subscribe((data) => {
      if (data.code === '200') {
        console.log(data.data);

        this.subjectTaxes.next(data.data);
      }
    });
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

  save(data: any): Observable<HttpResponseModel<any>> {
    return this.http.post<HttpResponseModel<any>>(this.url, data);
  }

  update(data: any): Observable<HttpResponseModel<any>> {
    return this.http.put<HttpResponseModel<any>>(this.url, data);
  }

  delete(id): Observable<HttpResponseModel<any>> {
    return this.http.delete<HttpResponseModel<any>>(this.url + '/' + id);
  }
}
