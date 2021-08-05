import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import * as forge from 'node-forge';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://foodlisa.sytes.net/api/v1';
  // private baseUrl = "http://localhost/api/v1";

  publicKey: string | null = null;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private userService: UserService) {}

  getPublicKey(): Observable<any> {
    const url = `/publickey`;

    return this.http
      .get<any>(this.baseUrl + url)
      .pipe(catchError(this.handleError));
  }

  getToken(postData: any): Observable<any> {
    if (this.publicKey != null) {
      var rsa = forge.pki.publicKeyFromPem(this.publicKey);
      var encryPassword = window.btoa(rsa.encrypt(postData.password));

      console.log(rsa);
      console.log(encryPassword);
      postData.password = encryPassword;
    }
    const url = `${this.baseUrl}/sessions`;

    return this.http
      .post<any>(url, postData, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  login(postData: any): Observable<any> {
    this.getPublicKey().subscribe(publicKey => (this.publicKey = publicKey));
    return this.getToken(postData);
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
