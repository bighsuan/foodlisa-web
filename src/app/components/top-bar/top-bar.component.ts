import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input()
  title: string | undefined;
  userName: string | undefined;
  id: string | undefined;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.id = this.storageService.getId();
    console.log(this.id);
    this.userName = this.storageService.getName();
  }

  logout() {
    this.storageService.delToken();
  }
}
