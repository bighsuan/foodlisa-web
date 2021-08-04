import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  $token: string|null = null;
  $publicKey: string|null = null;

  constructor() { }

  setUser() {

  }

  setPublicKey(publicKey : string): void {
    this.$publicKey = publicKey;
    console.log(this.$publicKey);
  }


}