import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UserService } from './user.service';
// @ts-ignore
import * as forge from 'node-forge';

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

  getToken(postData: any, publicKey: string): Observable<any> {
    interface ILoginData {
      phone: string;
      password: string;
    }

    console.log('gettoken');

    if (publicKey != null) {
      var rsa = forge.pki.publicKeyFromPem(publicKey);
      var encryPassword = window.btoa(rsa.encrypt(postData.password));

      console.log(encryPassword);
      postData.password = encryPassword;
    }
    const url = `${this.baseUrl}/sessions`;

    console.log(postData);
    return this.http
      .post<ILoginData>(url, postData, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  login(postData: any) {
    this.getPublicKey()
      .pipe(switchMap(pubkey => this.getToken(postData, pubkey)))
      .subscribe(user => {
        this.userService.setUser(user);
      });
  }

  logout() {
    this.userService.delUser();
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
