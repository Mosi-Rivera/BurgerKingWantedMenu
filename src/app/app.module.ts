import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { HeaderTagComponent } from './header-tag/header-tag.component';
import { FooterTagComponent } from './footer-tag/footer-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    AppMenuComponent,
    HeaderTagComponent,
    FooterTagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
