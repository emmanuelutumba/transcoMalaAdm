import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpResponseModel } from 'src/app/shared/model/HttpResponse.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = environment.baseUrl + 'profil';

  constructor(private http: HttpClient) {}

  userDataSubject: Subject<any> = new Subject<any>();

  loadAllUsers() {
    return this.userDataSubject.asObservable();
  }

  public getAllUsers() {
    return this.http.get<HttpResponseModel<any>>(this.url).subscribe((data) => {
      if (data.code === '200') {
        this.userDataSubject.next(data.data);
      }
    });
  }

  save(data): Observable<HttpResponseModel<any>> {
    return this.http.post<HttpResponseModel<any>>(this.url, data);
  }

  update(data): Observable<HttpResponseModel<any>> {
    return this.http.put<HttpResponseModel<any>>(this.url, data);
  }

  delete(id): Observable<HttpResponseModel<any>> {
    return this.http.delete<HttpResponseModel<any>>(this.url + '/' + id);
  }
}
