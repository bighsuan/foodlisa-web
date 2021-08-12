import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-child',
  templateUrl: './sidebar-child.component.html',
  styleUrls: ['./sidebar-child.component.css']
})
export class SidebarChildComponent implements OnInit {
  @Input()
  title: string | undefined;

  @Input()
  routerLink: string | undefined;

  @Input()
  disabled: string | undefined;

  constructor() {}

  ngOnInit() {}
}
