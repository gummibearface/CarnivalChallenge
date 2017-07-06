import { Component, OnInit } from '@angular/core';
import { MenuItems } from './menu-items';
import { MENU } from './mock-menu-items';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrl: './dashboard.component.css'
    })
export class MenuComponent {
    menuItems: MenuItems[] = MENU;
}