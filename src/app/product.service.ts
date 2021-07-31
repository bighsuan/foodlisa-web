import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'https://foodlisa.sytes.net/api/v1';
  // private baseUrl = "http://localhost/api/v1";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  /** GET products from the server */
  getProducts(): Observable<Product[]> {
    const url = `${this.baseUrl}/prods`;
    return this.http.get<Product[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  /** GET product by id. Will 404 if id not found */
  getProduct(id: number): Observable<Product> {
    const url = `${this.baseUrl}/prods/${id}`;
    return this.http.get<Product>(url);
  }

  //////// Save methods //////////

  /** POST: add a new product to the server */
  addProduct(postData: any): Observable<any> {
    return this.http.post<Product>(
      this.baseUrl + '/prods',
      postData,
      this.httpOptions
    );
  }

  /** DELETE: delete the product from the server */
  deleteProduct(id: number): Observable<Product> {
    const url = `${this.baseUrl}/prods/${id}`;

    return this.http.delete<Product>(url, this.httpOptions);
  }

  /** PUT: update the product on the server */
  updateProduct(id: number, product: Product): Observable<any> {
    const url = `${this.baseUrl}/prods/${id}`;
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