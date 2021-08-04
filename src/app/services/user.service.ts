import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;
  redirectUrl:string|null=null;

  constructor() {}

  setUser(user: any) {
    this.user = Object.assign(this.user, user);
  }

  setToken(token: string) {
    this.user = Object.assign(this.user, {
      Token: token
    });
  }

  getUser() {
    return this.user;
  }

  delUser() {
    this.user = {};
  }
}
