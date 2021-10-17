/**
  CLASSES
  ES6 introduced JavaScript Classes. JavaScript Classes are blueprints to create JavaScript Objects.
*/

// Use the keyword class to create a class.
class Animal {
  // The constructor method is automatically invoked whenever a new object is created.
  // Here, each object is initialized with two initial properties: "name" and "yearBorn".
  // Note that if you don't explicitly define a constructor method for a class, JS will automatically create an empty constructor method
  constructor(name, yearBorn) {
    this.name = name;
    this.yearBorn = yearBorn;
  }

  // Static class methods are defined on the class itself.
  // Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance.
  // They are typically used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
  static whatAmI() {
    return "I'm an animal!!";
  }

  // You can create getters and setters on the properties of a class, which is
  // especially helpful if you want to do perform some logic with the value before
  // returning a result, or before you set the property. To add getters and setters in // the class, use the get and set keywords.
  get age() {
    const date = new Date();
    return date.getFullYear() - this.yearBorn;
  }

  get petname() {
    return this.name.toUpperCase();
  }

  set petname(name) {
    this.name = name;
  }

  // You can add methods on a class
  eat(food) {
    return `${this.name} is eating ${food}`;
  }
}

// To create a class inheritance, use the extends keyword.
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
// A class created with a class inheritance inherits all the methods from another class:

class Mammal extends Animal {
  constructor(name, yearBorn, type) {
    // The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods
    super(name, yearBorn);
    this.type = type;
  }

  declareType() {
    return `${this.name} is a ${this.type}`;
  }
}

// Use the Car class to create two Car objects.
let rabbit = new Animal("Bunny", 2014);
let fish = new Animal("Nemo", 2019);
console.log(rabbit.eat("carrot"));
console.log(fish.eat("algae"));
console.log(rabbit.age);
console.log(fish.age);

// You can calll 'whatAmI()' on the Animal Class:
console.log(Animal.whatAmI());

// But NOT on an Animal Object:
// console.log(rabbit.whatAmI());

let cat = new Mammal("Kitty", 2018, "cat");
console.log(cat.declareType());
