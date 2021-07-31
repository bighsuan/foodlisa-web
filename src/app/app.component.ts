import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Foodlisa';
  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) {}

  ngOnInit() {
    if (!this.userService.getUser().token) {
    }
  }

  setToken(token: string) {
    if (!!token) {
      this.userService.setToken(token);
    }
  }

  setLogin(account: string) {
    // this.storageService.setKey(account);
    this.loginService.login();
  }
}
