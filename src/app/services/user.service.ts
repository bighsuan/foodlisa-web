import { Injectable } from '@angular/core';
import { IUser } from '../models/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = ({} as any) as IUser;

  constructor() {}

  setUser(user: IUser) {
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
    this.user = ({} as any) as IUser;
  }
}
