import { Toppings } from './toppings';

export class MenuItems {
    name: string;
    toppings: Toppings[] = [];
    price: number;
       
    constructor(name: string, toppings: Toppings[], price) {
        this.name = name;
        this.toppings = toppings;
        this.price = price;   
    }
    getTotalPrice() {
        let total:number = this.price;
        for (let topping of this.toppings){
            total += topping.price;
        }   
        return total;
    }
}