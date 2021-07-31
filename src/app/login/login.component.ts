import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  forgetPassword(): void {
    Swal.fire('Oops', '現在還沒有這個功能喔');
  }

  get controls() {
    return this.loginForm.controls;
  }
  login(): void {
    if (this.validation()) {
      Swal.fire('OK', '登入API');
    } else {
      Swal.fire('Oops', '請檢查輸入資料');
    }
  }
  validation(): boolean {
    let validNum = 0;

    //信箱驗證
    let isMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if (this.controls.email.value == '') {
      this.errMsg.email = '欄位為必填';
    } else if (!isMail.test(this.controls.email.value)) {
      this.errMsg.email = 'email格式錯誤';
    } else {
      this.errMsg.email = '';
      validNum += 1;
    }

    //密碼驗證
    let isPassword = /^[a-zA-Z0-9]+$/;
    if (this.controls.password.value == '') {
      this.errMsg.password = '欄位為必填';
    } else {
      this.errMsg.password = '';
      validNum += 1;
    }

    if (validNum == 2) return true;
    else return false;
  }
}
