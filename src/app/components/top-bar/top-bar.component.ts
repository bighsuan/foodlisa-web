import { Component, OnInit, Input } from '@angular/core';
import { NavigateDrawerComponent } from '../navigate-drawer/navigate-drawer.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input()
  title: string | undefined;

  constructor() {}

  ngOnInit() {}
}
