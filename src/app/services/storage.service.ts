import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  $token: string | null = null;
  private user: any;

  constructor() {}

  setUser(user: any) {
    this.user = user;
    console.log('setUser-------------');
    console.log(this.user);
  }

  getUser() {
    return this.user;
  }

  getId() {
    return this.user?.id;
  }

  getName() {
    return this.user?.name;
  }

  getToken() {
    return this.user?.token;
  }

  delToken() {
    this.user = {};
  }
}
