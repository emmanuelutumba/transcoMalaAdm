import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {HttpResponseModel} from '../../shared/model/HttpResponse.model';

@Injectable({
  providedIn: 'root'
})
export class TaxeService {
  private url = environment.baseUrl + 'taxe';

  subjectTaxe: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
  }


  public getAll(contrId): Observable<HttpResponseModel<any>> {
    return this.http.get<HttpResponseModel<any>>(this.url + '/byOwner/' + contrId);
  }
}
