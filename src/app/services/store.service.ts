import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IStore } from '../models';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class StoreService {
  private baseUrl = 'https://foodlisa.sytes.net/api/v1';
  // private baseUrl = "http://localhost/api/v1";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  /** GET products from the server */
  getStores(): Observable<IStore[]> {
    const url = `${this.baseUrl}/users/${this.storageService.getUserId}/stores`;
    return this.http.get<IStore[]>(url).pipe(catchError(this.handleError));
  }

  /** GET product by id. Will 404 if id not found */
  getStore(id: number): Observable<IStore> {
    const url = `${this.baseUrl}/users/${
      this.storageService.getUserId
    }/stores/${id}`;
    return this.http.get<IStore>(url);
  }

  /** POST: add a new product to the server */
  addStore(postData: any): Observable<any> {
    return this.http.post<IStore>(
      `${this.baseUrl}/users/${this.storageService.getUserId}/stores`,
      postData,
      this.httpOptions
    );
  }

  /** DELETE: delete the product from the server */
  deleteStore(id: number): Observable<IStore> {
    const url = `${this.baseUrl}/users/${
      this.storageService.getUserId
    }/stores/${id}`;

    return this.http.delete<IStore>(url, this.httpOptions);
  }

  /** PUT: update the product on the server */
  updateStore(id: number, product: IStore): Observable<any> {
    const url = `${this.baseUrl}/users/${
      this.storageService.getUserId
    }/stores/${id}`;
    return this.http.put(url, product, this.httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
