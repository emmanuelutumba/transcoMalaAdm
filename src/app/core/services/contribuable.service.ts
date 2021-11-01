import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponseModel} from '../../shared/model/HttpResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ContribuableService {
  private url = environment.baseUrl + 'proprietaire';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  public getById(id: number): Observable<any> {
    return this.http.get<HttpResponseModel<any>>(this.url).pipe(map(data => {
      console.log(data);
      if (data.code === '200') {
        const dataContr = data.data.filter(value => {
          return value.id === id;
        });
        data.data = dataContr;
      }
      return data;
    }));
  }

  save(owner): Observable<any> {
    return this.http.post(this.url, owner);
  }
}
