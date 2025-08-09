//this - keyword refers to the object,where "this" is used.It is used to access the properties 
//  method of an object. the object depends on immediate context.
// person.name = this.name;
// "this" keyword does not work with arrow function.
const person1 = {
    name: 'John',
    age: 30,
    favFood : 'Burger',
    greet: function() {
        console.log(`I am ${this.name}`);
    },
    eat : function() {
        console.log(`${this.name} is eating ${this.favFood}`);
    }
};
person1.greet();
person1.eat();


