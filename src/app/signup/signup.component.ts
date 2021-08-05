import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    email: [''],
    firstName: [''],
    lastName: [''],
    phone: [''],
    password: [''],
    passwordCheck: ['']
  });

  errMsg = {
    email: '',
    lastName: '',
    firstName: '',
    phone: '',
    password: '',
    passwordCheck: ''
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  get value() {
    return this.signupForm.value;
  }

  submit(): void {
    if (this.validation()) {
      this.loginService.signup(this.value).subscribe(
        () =>
          Swal.fire('OK', '註冊成功').then(() => {
            this.router.navigate(['/login']);
          }),
        err => Swal.fire('Oops', '註冊失敗, 請稍後再試')
      );
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

    // 姓名 的驗證
    if (this.value.firstName == '') {
      this.errMsg.firstName = '欄位為必填';
    } else if (this.value.firstName.length > 5) {
      this.errMsg.firstName = '請勿超過5個字';
    } else {
      this.errMsg.firstName = '';
      validNum += 1;
    }

    if (this.value.lastName == '') {
      this.errMsg.lastName = '欄位為必填';
    } else if (this.value.lastName.length > 5) {
      this.errMsg.lastName = '請勿超過5個字';
    } else {
      this.errMsg.lastName = '';
      validNum += 1;
    }

    //電話驗證
    if (this.value.phone == '') {
      this.errMsg.phone = '欄位為必填';
    } else if (this.value.phone.length > 10 || this.value.phone.length < 10) {
      this.errMsg.phone = '電話格式錯誤';
    } else {
      this.errMsg.phone = '';
      validNum += 1;
    }

    //密碼驗證
    let isPassword = /^[a-zA-Z0-9]+$/;
    if (this.value.password == '') {
      this.errMsg.password = '欄位為必填';
    } else if (!isPassword.test(this.value.password)) {
      this.errMsg.password = '請勿包含特殊字元';
    } else if (this.value.password.length < 8) {
      this.errMsg.password = '請勿少於8個字';
    } else if (this.value.password.length > 16) {
      this.errMsg.password = '請勿超過16個字';
    } else {
      this.errMsg.password = '';
      validNum += 1;
    }

    //密碼驗證
    if (this.value.passwordCheck == '') {
      this.errMsg.passwordCheck = '欄位為必填';
    } else if (this.value.password != this.value.passwordCheck) {
      this.errMsg.passwordCheck = '兩次密碼不相同';
    } else {
      this.errMsg.passwordCheck = '';
      validNum += 1;
    }

    if (validNum == 6) return true;
    else return false;
  }
}
