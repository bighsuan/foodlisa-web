import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FOODLISA';
  constructor(
    private loginService: LoginService,
    private userService: UserService
  ) {}

  ngOnInit() {
  }
}
