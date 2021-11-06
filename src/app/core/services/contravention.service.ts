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

  constructor(private http: HttpClient) {}

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
}
