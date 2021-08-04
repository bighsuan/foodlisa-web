import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = {"id": '', 'token': ''};
  redirectUrl:string|null=null;

  constructor() {}

  setUser(token: string) {
    this.user = Object.assign(this.user, {
      Token: token
    });
  }

  getUser() {
    return this.user;
  }

  delUser() {
    this.user = {"id": '', 'token': ''};;
  }
}
