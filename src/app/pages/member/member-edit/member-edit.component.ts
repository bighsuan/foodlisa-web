import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  form = this.fb.group({
    firstName: [''],
    lastName: [''],
    phone: ['']
  });

  errMsg = {
    lastName: '',
    firstName: '',
    phone: ''
  };

  loading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get controls() {
    return this.form.controls;
  }

  submit(): void {
    if (this.validation()) {
      Swal.fire('OK', '修改API');
    } else {
      Swal.fire('Oops', '請檢查輸入資料');
    }
  }

  validation(): boolean {
    let validNum = 0;

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
    if (validNum == 3) return true;
    else return false;
  }
}
