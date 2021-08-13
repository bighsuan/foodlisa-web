import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  constructor(public storageService: StorageService, private router: Router) {}

  ngOnInit() {
    document.body.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  logout() {
    Swal.fire({
      text: '確定要登出嗎?',
      showCancelButton: true,
      confirmButtonText: `登出`,
      cancelButtonText: `取消`
    }).then(result => {
      if (result.isConfirmed) {
        this.storageService.delToken();
        Swal.fire('', '登出成功').then(() => {
          this.router.navigate(['/login']);
        });
      }
    });
  }

  closeDrawer() {
    // .foundation('close')
  }
}
