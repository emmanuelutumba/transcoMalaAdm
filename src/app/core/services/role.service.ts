import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpResponseModel } from 'src/app/shared/model/HttpResponse.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private url = environment.baseUrl + 'profil';
  constructor(private http: HttpClient) {}
  roleSubject: Subject<any> = new Subject<any>();
  loadData() {
    return this.roleSubject.asObservable();
  }

  getAll() {
    this.http
      .get<HttpResponseModel<any>>(this.url + '/role')
      .subscribe((data) => {
        if (data.code === '200') {
          this.roleSubject.next(data.data);
        }
      });
  }
}
