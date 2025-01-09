// class - ES6 feature,provides more structured and cleaner way to work with objects.compare to traditional 
// function constructor.
// Ex - static keyword, inheritance ......

class product {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    sell(){
        console.log(`Price of ${this.name} is ${this.price}`);
        console.log(`${this.name} is sold out`);

    }
}
const product1 = new product('Laptop',50000);
const product2 = new product('Mobile',20000);

product1.sell();
product2.sell();