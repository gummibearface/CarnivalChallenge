import { MenuItems } from './menu-items';
import { BURGER_TOPPINGS, HOTDOG_TOPPINGS, PRETZEL_TOPPINGS } from './mock-toppings';
    

export const MENU: MenuItems[] = [
{name: 'Jumbo Pretzel', toppings: PRETZEL_TOPPINGS, price: 2.50},
{name: 'Tiny Pretzel', toppings: PRETZEL_TOPPINGS, price: 1.00},
{name: 'Hamburger', toppings: BURGER_TOPPINGS, price: 2.00},
{name: 'Hot Dog', toppings: HOTDOG_TOPPINGS, price: 2.00},
{name: 'Nachos', toppings: null, price: 2.50},
{name: 'Chips', toppings: null, price: .75},
{name: 'Drink', toppings: null, price: 1.00},
{name: 'Cotton Candy', toppings: null, price: 1.50},
    
];