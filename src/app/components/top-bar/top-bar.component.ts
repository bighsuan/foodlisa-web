import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input()
  title: string | undefined;

  constructor(public storageService: StorageService, private router: Router) {}

  ngOnInit() {}

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
