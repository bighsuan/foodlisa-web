import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-parent',
  templateUrl: './sidebar-parent.component.html',
  styleUrls: ['./sidebar-parent.component.css']
})
export class SidebarParentComponent implements OnInit {
  @Input()
  title: string | undefined;

  constructor() {}

  ngOnInit() {}
}
