import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(public storageService: StorageService, private router: Router) {}

  ngOnInit() {}

  signout() {}

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
}
