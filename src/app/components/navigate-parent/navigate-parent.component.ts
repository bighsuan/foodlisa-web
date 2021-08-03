import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigate-parent',
  templateUrl: './navigate-parent.component.html',
  styleUrls: ['./navigate-parent.component.css']
})
export class NavigateParentComponent implements OnInit {
  @Input()
  title: string | undefined;

  @Input()
  active: boolean = false;
  @Input()
  show: boolean = false;
  constructor() {}

  ngOnInit() {}
}
