import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { JSEncrypt } from 'jsencrypt';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'https://foodlisa.sytes.net/api/v1';
  // private baseUrl = "http://localhost/api/v1";

  publicKey: string|null = null;
  encrypt = new JSEncrypt();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private userService: UserService) {}


  getPublicKey():  Observable<any>{
      
      const url = `/publickey`;

      return this.http.get<any>(this.baseUrl+url).pipe(catchError(this.handleError));
  }

  getToken(postData:any):Observable<any>{
    
    if(this.publicKey != null)
    {
      console.log(this.encrypt);
      this.encrypt.setPublicKey(this.publicKey);
      let encodePassword = this.encrypt.encrypt(postData.password);
      console.log(encodePassword);
      postData.password = encodePassword;
    }
    const url = `${this.baseUrl}/sessions`;

    return this.http.post<any>(
      url,
      postData,
      this.httpOptions
    ).pipe(catchError(this.handleError));

  }

  login(postData: any): Observable<any>{
    this.getPublicKey()
    .subscribe(publicKey => this.publicKey = publicKey);
    return this.getToken(postData)
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
