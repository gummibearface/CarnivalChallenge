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
    order: OrderedMenuItems[] = [];
    items: string = '';

    
    public addItemToOrder = (menuItem) => {
        alert(menuItem.name);
        let item: OrderedMenuItems = menuItem as OrderedMenuItems;
        this.order.push(item);
        this.items += (item.name + ', ');        
        alert(this.items);
    }
       
    
    public addToppingToOrder = (topping) => {
            alert(topping.name + ' Quantity before: ' + topping.quantity);
            topping.quantity += 1;
            alert(topping.name + ' Quantity after: ' + topping.quantity);
    }
    
    public removeToppingFromOrder = (topping) => {
        alert(topping.name);   
        if (topping.quantity > 0 ) {
            topping.quantity -= 1;    
        }
        else {
            alert('You can\' t remove toppings that aren\'t on the order');   
        }
    }
    
}