import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpResponseModel } from '../../shared/model/HttpResponse.model';

@Injectable({
  providedIn: 'root',
})
export class ContraventionService {
  private url = environment.baseUrl + 'contravention';
  contraventionsSubject: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {}

  loadData() {
    return this.contraventionsSubject.asObservable();
  }

  public getAllContr() {
    this.http.get<HttpResponseModel<any>>(this.url).subscribe((data) => {
      if (data.code === '200') {
        this.contraventionsSubject.next(data.data);
      }
    });
  }

  public getAllList() {
    return this.http.get<HttpResponseModel<any>>(this.url + '/infos');
  }

  public getAll(contrId): Observable<HttpResponseModel<any>> {
    return this.http.get<HttpResponseModel<any>>(
      this.url + '/byOwner/' + contrId
    );
  }

  contrSubject: Subject<any> = new Subject<any>();
  loadContravention(): Observable<any> {
    return this.contrSubject.asObservable();
  }

  public getCarContravention(idNumber) {
    this.http
      .get<HttpResponseModel<any>>(this.url + '/byCar/' + idNumber)
      .subscribe((data) => {
        this.contrSubject.next(data);
      });
  }

  contraventionPayement(data) {
    return this.http.post<HttpResponseModel<any>>(this.url + '/payement', data);
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
