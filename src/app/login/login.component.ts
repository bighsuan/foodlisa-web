import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

  errMsg = {
    email: '',
    password: ''
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  forgetPassword(): void {
    Swal.fire('Oops', '現在還沒有這個功能喔');
  }

  get value() {
    return this.loginForm.value;
  }
  login(): void {
    if (this.validation()) {
      // this.loginService
      //   .login(this.value)
      //   .subscribe(() => this.router.navigate(['/']));
      Swal.fire('OK', '登入API');
    } else {
      Swal.fire('Oops', '請檢查輸入資料');
    }
  }
  validation(): boolean {
    let validNum = 0;

    //信箱驗證
    let isMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (this.value.email == '') {
      this.errMsg.email = '欄位為必填';
    } else if (!isMail.test(this.value.email)) {
      this.errMsg.email = 'email格式錯誤';
    } else {
      this.errMsg.email = '';
      validNum += 1;
    }

    //密碼驗證
    let isPassword = /^[a-zA-Z0-9]+$/;
    if (this.value.password == '') {
      this.errMsg.password = '欄位為必填';
    } else {
      this.errMsg.password = '';
      validNum += 1;
    }

    if (validNum == 2) return true;
    else return false;
  }
}
