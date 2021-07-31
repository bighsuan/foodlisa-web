import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { UserService } from './user.service';

@Injectable()
export class AppService {
  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) {}

  backLogin() {
    this.userService.delUser();
    this.loginService.logout();
    //  window.location.href = LoginUrl;
  }
}
