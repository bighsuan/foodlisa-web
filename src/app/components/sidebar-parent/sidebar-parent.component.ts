import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-parent',
  templateUrl: './sidebar-parent.component.html',
  styleUrls: ['./sidebar-parent.component.css']
})
export class SidebarParentComponent implements OnInit {
  _item: string | undefined;

  // @Input()
  // public set item(item: string) {
  //   this._item = item;
  // }

  tt = '456789';

  // @ContentChild(ChildComponent)
  //   child:ChildComponent;
  constructor() {}

  ngOnInit() {
    console.log(this.tt);
  }
}
