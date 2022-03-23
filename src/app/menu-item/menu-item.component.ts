import { Component, Input, OnInit } from '@angular/core';
import {I_MENU_ITEM} from '../menu-data/menu';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() item? : I_MENU_ITEM;

  constructor() { }

  ngOnInit(): void {
  }

}
