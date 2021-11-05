import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpResponseModel} from '../../shared/model/HttpResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ContraventionService {
  private url = environment.baseUrl + 'contravention';

  constructor(private http: HttpClient) {
  }

  public getAll(contrId): Observable<HttpResponseModel<any>> {
    return this.http.get<HttpResponseModel<any>>(this.url + '/byOwner/' + contrId);
  }
}
