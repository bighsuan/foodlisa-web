import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-member-edit-password',
  templateUrl: './member-edit-password.component.html',
  styleUrls: ['./member-edit-password.component.css']
})
export class MemberEditPasswordComponent implements OnInit {
  form = this.fb.group({
    password: [''],
    passwordCheck: ['']
  });

  errMsg = {
    password: '',
    passwordCheck: ''
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get controls() {
    return this.form.controls;
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

    if (validNum == 2) return true;
    else return false;
  }
}
