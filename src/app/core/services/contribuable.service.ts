import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponseModel} from '../../shared/model/HttpResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ContribuableService {
  private url = environment.baseUrl + 'proprietaire';
  subject: Subject<any> = new Subject<any>();
  subjectContrById: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  public load() {
    this.http.get(this.url).pipe(map(data => {
      console.log(data);
      this.subject.next(data);
      return data;
    })).subscribe();
  }

  public loadById(): Observable<any> {
    return this.subjectContrById.asObservable();
  }

  public getAll(): Observable<any> {
    return this.subject.asObservable();
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

  public getContribuableById(id: number) {
    this.http.get<HttpResponseModel<any>>(this.url).pipe(map(data => {
      console.log(data, id);
      if (data.code === '200') {
        const dataContr = data.data.filter(value => {
          return value.id === id;
        });
        data.data = dataContr;
        this.subjectContrById.next(data);
      }
      return data;
    })).subscribe();
  }

  save(owner): Observable<any> {
    return this.http.post(this.url, owner);
  }

  update(owner): Observable<any> {
    return this.http.put(this.url, owner);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
