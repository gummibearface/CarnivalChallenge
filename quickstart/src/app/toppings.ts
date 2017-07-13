export class Toppings {
    name: string;
    price: number;   
    quantity: number = 0; 
    
    constructor(name: string, price:number) {
        this.name = name;
        this.price = price;   
    }
}
