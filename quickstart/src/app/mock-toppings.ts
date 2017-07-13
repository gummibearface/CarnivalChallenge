import { Toppings } from './toppings';
export const BURGER_TOPPINGS: Toppings[] = [
    new Toppings('Cheese', .50),
    new Toppings('Onion', .50),
    new Toppings('Bacon', .75),
    new Toppings('Extra Patty', 1.00)
];

export const HOTDOG_TOPPINGS: Toppings[] = [
    new Toppings('Sauerkraut', .50),
    new Toppings('Cheese', .50),
];

export const PRETZEL_TOPPINGS: Toppings[] = [
     new Toppings('Mustard', .25)
];