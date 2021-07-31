import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    email: ['', Validators.email],
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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get controls() {
    return this.signupForm.controls;
  }

  submit(): void {
    if (this.validation()) {
      Swal.fire('OK', '註冊API');
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

    // 姓名 的驗證
    if (this.controls.firstName.value == '') {
      this.errMsg.firstName = '欄位為必填';
    } else if (this.controls.firstName.value.length > 5) {
      this.errMsg.firstName = '請勿超過5個字';
    } else {
      this.errMsg.firstName = '';
      validNum += 1;
    }

    if (this.controls.lastName.value == '') {
      this.errMsg.lastName = '欄位為必填';
    } else if (this.controls.lastName.value.length > 5) {
      this.errMsg.lastName = '請勿超過5個字';
    } else {
      this.errMsg.lastName = '';
      validNum += 1;
    }

    //電話驗證
    if (this.controls.phone.value == '') {
      this.errMsg.phone = '欄位為必填';
    } else if (
      this.controls.phone.value.length > 10 ||
      this.controls.phone.value.length < 10
    ) {
      this.errMsg.phone = '電話格式錯誤';
    } else {
      this.errMsg.phone = '';
      validNum += 1;
    }

    //密碼驗證
    let isPassword = /^[a-zA-Z0-9]+$/;
    if (this.controls.password.value == '') {
      this.errMsg.password = '欄位為必填';
    } else if (!isPassword.test(this.controls.password.value)) {
      this.errMsg.password = '請勿包含特殊字元';
    } else if (this.controls.password.value.length < 8) {
      this.errMsg.password = '請勿少於8個字';
    } else if (this.controls.password.value.length > 16) {
      this.errMsg.password = '請勿超過16個字';
    } else {
      this.errMsg.password = '';
      validNum += 1;
    }

    //密碼驗證
    if (this.controls.passwordCheck.value == '') {
      this.errMsg.passwordCheck = '欄位為必填';
    } else if (
      this.controls.password.value != this.controls.passwordCheck.value
    ) {
      this.errMsg.passwordCheck = '兩次密碼不相同';
    } else {
      this.errMsg.passwordCheck = '';
      validNum += 1;
    }

    if (validNum == 6) return true;
    else return false;
  }
}
