import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-tag',
  templateUrl: './header-tag.component.html',
  styleUrls: ['./header-tag.component.css']
})
export class HeaderTagComponent implements OnInit {
  @Input() object : any;
  @Input() getActiveTab : () => string;
  @Input() setActiveTab : (str:'BURGERS' | 'SWEETS' | 'SIDES') => void;

  isActiveTab(str:string)
  {
    return this.getActiveTab() === str;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
