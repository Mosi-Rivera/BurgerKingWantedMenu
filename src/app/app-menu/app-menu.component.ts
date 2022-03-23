import { Component, OnInit } from '@angular/core';
import {BK_MENU,I_BK_MENU, I_MENU_ITEM} from '../menu-data/menu';

interface i_object
{
  active_tab: 'BURGERS' | 'SWEETS' | 'SIDES';
}

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  object : i_object = {
    active_tab: 'BURGERS'
  };

  bk_menu: I_BK_MENU = BK_MENU;

  getActiveMenuItems(): Array<I_MENU_ITEM>
  {
    return this.bk_menu[this.object.active_tab];
  }

  getActiveTab() : string
  {
    return this.object.active_tab;
  }

  setActiveTab = (str:'BURGERS' | 'SWEETS' | 'SIDES') : void => {
    this.object.active_tab = str;
  };

  constructor() { }

  ngOnInit(): void {
    this.bk_menu = BK_MENU;
  }

}
