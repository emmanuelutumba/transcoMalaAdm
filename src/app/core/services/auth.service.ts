import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserModel } from '../model/user.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private url = environment.baseUrl + 'profil/';
  private userSubject: BehaviorSubject<any>;

  constructor(private httpClient: HttpClient) {
    const userData = localStorage.getItem('userData');
    this.userSubject = new BehaviorSubject<any>(userData);
  }

  getUserData() {
    return this.userSubject.value;
  }

  login(user): Observable<any> {
    return this.httpClient.post<any>(this.url + 'auth', user).pipe(
      map((response) => {
        if (response.code === '200') {
          localStorage.setItem('userData',JSON.stringify(response.data));
          this.userSubject.next(response.data);
        }
        return response;
      })
    );
  }

  logout() {
    localStorage.removeItem('userData');
    this.userSubject.next(null);
  }
}
