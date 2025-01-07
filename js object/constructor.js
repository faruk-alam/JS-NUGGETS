// constructor - special method for defining properties and methods of an object.

function car(name,model,year,color){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){
        console.log(`You drive the ${this.model}`);
    }
}
const car1 = new car('Toyota','Corolla',2020,'Black');
const car2 = new car('Honda','Civic',2021,'White');
const car3 = new car('Ford','Mustang',2022,'Red');

// console.log(car1.name);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.name);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.colorname);

car1.drive();
car2.drive();
car3.drive();