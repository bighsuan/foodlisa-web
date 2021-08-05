import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UserService } from './user.service';
// @ts-ignore
import * as forge from 'node-forge';
import { ILoginData } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://foodlisa.sytes.net/api/v1';
  // private baseUrl = "http://localhost/api/v1";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private userService: UserService) {}

  publickey = 'string';

  getPublicKey(): Observable<any> {
    console.log('getPublicKey');
    const url = `/publickey`;

    return this.http
      .get<any>(this.baseUrl + url)
      .pipe(catchError(this.handleError));
  }

  post(postData: any, url: string): Observable<ILoginData> {
    let apiUrl = `${this.baseUrl}${url}`;

    return this.http
      .post<any>(apiUrl, postData, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  login(postData: ILoginData): Observable<any> {
    return this.getPublicKey().pipe(
      switchMap(publicKey => {
        // 加密
        var rsa = forge.pki.publicKeyFromPem(publicKey);
        var encryPassword = window.btoa(rsa.encrypt(postData.password));

        console.log(encryPassword);
        var requestData = {
          phone: postData.phone,
          password: encryPassword
        };
        return this.post(requestData, '/sessions');
      })
    );
  }

  logout() {
    this.userService.delUser();
  }

  signup(postData: any): Observable<any> {
    return this.getPublicKey().pipe(
      switchMap(publicKey => {
        // 加密
        var rsa = forge.pki.publicKeyFromPem(publicKey);
        var encryPassword = window.btoa(rsa.encrypt(postData.password));

        console.log(encryPassword);
        var requestData = {
          email: postData.email,
          firstName: postData.firstName,
          lastName: postData.lastName,
          phone: postData.phone,
          password: encryPassword
        };
        console.log(requestData);
        console.log('註冊');
        return this.post(requestData, '/users');
      })
    );
  }

  // logout(): Observable<any> {
  //   const url = `${this.baseUrl}/sessions`;

  //   return this.http.post<any>(
  //     url,
  //     postData,
  //     this.httpOptions
  //   ).pipe(catchError(this.handleError));
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
