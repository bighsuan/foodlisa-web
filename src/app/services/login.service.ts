import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private baseUrl = 'https://foodlisa.sytes.net/api/v1';
  private baseUrl = "http://localhost/api/v1";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private storageService: StorageService) {}


  getPublicKey(): void{
      
      const url = `/publickey`;

      this.http.get<any>(this.baseUrl+url)
      .subscribe(publicKey => this.storageService.setPublicKey(publicKey));
  }

  login() {
  }

  logout() {}
  // login(postData: any): Observable<any>{
  //   const url = `${this.baseUrl}/sessions`;

  //   return this.http.post<any>(
  //     url,
  //     postData,
  //     this.httpOptions
  //   ).pipe(catchError(this.handleError)
  //   .subscribe(token => this.storageService.setUser(token)));
  // }

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
