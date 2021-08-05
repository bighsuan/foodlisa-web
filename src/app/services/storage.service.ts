import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  $token: string | null = null;
  private user: any;

  constructor() {}

  setUser(user: any) {
    this.user = user;
  }

  getUserId() {
    return this.user?.userId;
  }

  getName() {
    return this.user?.name;
  }

  getToken() {
    return this.user?.token;
  }

  delUser() {
    this.user = {};
  }
}
