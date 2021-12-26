import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponseModel } from 'src/app/shared/model/HttpResponse.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ReclamationService {
  url = environment.baseUrl + 'message';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<HttpResponseModel<any>>(this.url);
  }

  delete(id) {
    return this.http.delete<HttpResponseModel<any>>(this.url + '/' + id);
  }
}
