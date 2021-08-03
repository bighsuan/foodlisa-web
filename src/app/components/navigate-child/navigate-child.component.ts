import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigate-child',
  templateUrl: './navigate-child.component.html',
  styleUrls: ['./navigate-child.component.css']
})
export class NavigateChildComponent implements OnInit {
  @Input()
  title: string | undefined;

  @Input()
  routerLink: string | undefined;
  constructor() {}

  ngOnInit() {}
}
