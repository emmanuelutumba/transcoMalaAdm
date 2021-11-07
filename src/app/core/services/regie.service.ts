import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpResponseModel } from 'src/app/shared/model/HttpResponse.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegieService {
  private url = environment.baseUrl + 'regie';
  private regieSubject: Subject<any> = new Subject<any>();
  private taxesSubject: Subject<any> = new Subject<any>();
  private regiesData = [];

  constructor(private http: HttpClient) {}

  public getData() {
    return this.regiesData;
  }

  loadData() {
    return this.regieSubject.asObservable();
  }

  public getAll() {
    this.http.get<HttpResponseModel<any>>(this.url).subscribe((data) => {
      if (data.code === '200') {
        this.regiesData = data.data;
        this.regieSubject.next(data.data);
      }
    });
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
