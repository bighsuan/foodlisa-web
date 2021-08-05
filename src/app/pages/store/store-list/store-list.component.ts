import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';
import { STORE } from '../../../mock-store';
import { StoreService } from '../../../services/store.service';
import { IStore } from '../../../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  products: IStore[] = [];
  isLoading = false;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.getStores();
  }

  getStores(): void {
    this.storeService
      .getStores()
      .subscribe((products: IStore[]) => (this.products = products));
  }

  delStore(id: number): void {
    Swal.fire('OK', '刪除成功');
    this.storeService.deleteStore(id).subscribe(() => this.getStores());
  }
}
