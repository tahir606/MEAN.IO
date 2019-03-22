import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:4000/login/';

  constructor(private http: HttpClient) {
  }

  public login(userInfo: User) {
    return this.http.get(this.uri, {
      params: new HttpParams().set('username', userInfo.username)
    });
  }

  // public login(userInfo: User) {
  //   localStorage.setItem('ACCESS_TOKEN', 'access_token');
  //   // console.log(userInfo.username, userInfo.password);
  // }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
