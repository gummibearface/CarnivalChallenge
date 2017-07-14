import { MenuItems } from './menu-items';
import { BURGER_TOPPINGS, HOTDOG_TOPPINGS, PRETZEL_TOPPINGS } from './mock-toppings';
    

export const MENU: MenuItems[] = [
new MenuItems('Jumbo Pretzel',PRETZEL_TOPPINGS,2.50),
new MenuItems('Tiny Pretzel',PRETZEL_TOPPINGS,1.00),
new MenuItems('Hamburger',BURGER_TOPPINGS,2.00),
new MenuItems('Hot Dog',HOTDOG_TOPPINGS,2.00),
new MenuItems('Nachos',null,2.50),
new MenuItems('Chips',null,.75),
new MenuItems('Drink',null,1.00),
new MenuItems('Cotton Candy',null,1.50)
   
];