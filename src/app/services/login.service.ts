import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {JSEncrypt} from "jsencrypt";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://foodlisa.sytes.net/api/v1';
  // private baseUrl = "http://localhost/api/v1";

  publicKey: string|null = null;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}


  getPublicKey():  Observable<any>{
      
      const url = `/publickey`;

      return this.http.get<any>(this.baseUrl+url).pipe(catchError(this.handleError));
  }

  login(postData: any): Observable<any>{
    this.getPublicKey()
    .subscribe(publicKey => this.publicKey = publicKey)

    console.log(this.publicKey)
    let encryptStr = new JSEncrypt();
    if(this.publicKey != null)
    {
      encryptStr.setPublicKey(this.publicKey); // 设置 加密公钥
      postData.password = encryptStr.encrypt(postData.password); // 进行加密
      console.log(postData)
    }
    const url = `${this.baseUrl}/sessions`;

    return this.http.post<any>(
      url,
      postData,
      this.httpOptions
    ).pipe(catchError(this.handleError));
  }

  logout() {}

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
