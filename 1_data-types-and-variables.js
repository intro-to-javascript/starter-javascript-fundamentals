/** 
  1. DATA TYPES & VARIABLES
*/

// CONSOLE.LOG() & ALERT()
//  console.log prints an output to the console, which is helpful for debugging
console.log(7 - 4);
console.log(true); // boolean
console.log("hello" + 5 + 5);

// You can make popups happen with alert()
alert("hello");

// VARIABLE UPDATE
var color = "green";
var color = "purple";
console.log({ color }); // color is set to "purple"; var variables can be re-declared and re-assigned a value

// LET
let anotherColor = "green";
let anotherColor = "purple";
console.log({ anotherColor }); // error because let variables cannot be re-declared

let yetAnotherColor = "orange";
yetAnothercolor = "blue";
console.log({ yetAnotherColor }); // blue because let variables can be re-assigned to a different value

yetAnotherColor = 17;
console.log({ yetAnotherColor }); // 17 because in JavaScript you can re assign a variable to a value of a different type, aka dynamic typing

// CONST
const colorCannotReassign = "red";
colorCannotReassign = "yellow";
console.log({ colorCannotUpdate }); // error because const variables can neither be redeclared nor reassigned to a different value

const computer = {
  type: "Macintosh",
  os: "Catalina",
};

computer.type = "Microsoft";
computer.os = "Windows 10";
console.log({ computer }); // you can reassign the properties of an object declared with const

/** 
  CHALLENGE: What will get logged to the console? Why?

  computer = {
    type: "Microsoft",
  };

  console.log(computer);
*/

// VARIABLE SCOPE
let fruit = "apple";
let fruitEaten = 3;

if (fruitEaten > 2) {
  let fruit = "orange";
  console.log({ fruit });
}

console.log({ fruit }); // let has block scoping

/**
  CHALLENGE: What will get logged to the console? Why?

  let shouldEatFruit = true;
  if (shouldEatFruit) {
    let fruit = "orange";
    const anotherFruit = "apple";
    console.log("fruit inside block: ", fruit);
    console.log("anotherFruit inside block: ", anotherFruit);
  }
  console.log("fruit outside block: ", fruit);
  console.log("anotherFruit outside block:", anotherFruit);
*/

// VARIABLE HOISTING
console.log({ mammal }); // logs undefined
var mammal = "dog";

console.log({ fish }); // error
let fish = "goldfish";

console.log({ flower }); // error
const flower = "hibiscus";

// ES5 STRING
var greeting = "hi";
var name = "John";
var sayHello = greeting + " " + name;
console.log({ sayHello });

// ES6 STRING
const anotherGreeting = "hey";
const anotherName = "Hou";
const anotherSayHello = `${anotherGreeting} ${anotherName}`;
console.log({ anotherSayHello });

// MULTILINE STRING
const multiLineString = `
Hello,
my friend,
how are you, doing?
`;
console.log(multiLineString);

/** 
  CHALLENGE: Rewrite sentence to use template literals.
  const sentence =
  greet + ", how are you doing?" + " The weather is " + weather + " today.";
*/
const greet = "Good morning";
const weather = "sunny";
const sentence = `${greet}, how are you doing? The weather is ${weather} today.`;
console.log({ sentence });

// GENERAL RULES FOR VARIABLE NAMES
// You should use camelCase, with NO spaces in between words
let niceCar = "Ford"; // camelCase
let AnimalWithGills = "Fish"; // Pascal

// Variables can type switch, but you DONT WANT TO DO THIS
let secondColor = "blue";
secondColor = {};

// Variable names may begin with a letter, underscore, or dollar sign. You can use "_", but it is not conventional
let vegetable = "asparagus";
let _veggie = "carrot";
let $veg = "lettuce";

// BASIC DATA TYPES
// Five types of variables are always primitive variables
// A primitive value is a value that has no properties or methods.
// Primitive values are immutable.
let aString = "hello world"; // string
let yearOfConstitution = 1787; // number
let averageUberRating = 4.92; // floating point number
let humongousNumber = 3.175e8; // basically 3.175 x 10^8

console.log(typeof coinToss); // undefined

// null specifically suggests emptiness
let nothing = null; // null

let myName = "Hou Chia";
console.log(myName);

// Find the variable type with `typeof`
const car = { make: "Honda", year: 1997 };
console.log(typeof car); // returns "Object"

// You can also call 'isNaN' to determine if something is a number or not
let numberOfBrainCells = 1.98e16;
console.log(isNaN(numberOfBrainCells));
