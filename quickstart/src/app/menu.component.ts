import { Component, OnInit } from '@angular/core';
import { MenuItems } from './menu-items';
import { OrderedMenuItems } from './ordered-menu-items';
import { MENU } from './mock-menu-items';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./dashboard.component.css']
    })
export class MenuComponent {
    menuItems: MenuItems[] = MENU;
    order: OrderedMenuItems[];
    clicked(event) {
        alert(event);    
    }
}