/** 
  7. FUNCTIONS
  There are two ways of defining a function in JavaScript: function declarations and function expressions
*/

/** 
  FUNCTION DECLARATION
  A JavaScript function is defined using the function keyword, followed by the name of the function, parentheses (), and the function body {}.
  Function names may include letters, digits, underscores, and dollar signs, etc.
*/

// Function declarations are hoisted, meaning you can call them before they are declared in the code.
console.log(sum(1, 2)); // works fine

// Here is a function that accepts two parameters, a and b.
// Declared functions are not executed immediately, but can be executed later, when they are invoked with ().
// Note that JavaScript neiter specifies data types for parameters nor performs type-checking on passed arguments. Functions may accept any number of parameters
function sum(a, b) {
  // Inside the function, the parameters a and b behave as local variables.
  return a + b; // The function returns the sum of a and b. When JavaScript reaches a return keyword, it will stop executing.
}

// Invoke a function with ()
sum(-1, 9);

// You can store the results of functions in variables for reuse
let result = sum(2, 3);
const message = `The sum of 2 and 3 is ${result}.`;

// Variables declared within a JavaScript function are "enclosed" within the function
// and are not accessible from the outside of the function
function hello() {
  // Local variables are created when a function starts, and deleted when the function is completed.
  let helloWorld = "hello world";
}
// console.log(helloWorld);

/** 
  FUNCTION EXPRESSION
  A function expression can be stored in a variable. Function expressions are not hoisted, so you cannot use them before they are declared.
*/

// Set a variable name to an anonymous function.
const difference = function (a, b) {
  return Math.abs(a - b);
};

// To invoke the function you can call the variable name
console.log(difference(5, 9));

/**
  INVOKING A FUNCTION AS A METHOD
  In JavaScript you can define functions as object methods.
*/
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`; // The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is person.
  },
};
console.log(person.fullName());

/** 
  ES6 ARROW FUNCTIONS
*/
// ES5
// var printName = function (firstName, lastName) {
//   return firstName + " " + lastName;
// };

// ES6
// const printName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };

const printName = (firstName = "John", lastName = "Doe") =>
  `${firstName} ${lastName}`;

// console.log(printName("Hou", "Chia"));

console.log(printName("Hou"));

// Refactor the following function to use arrow syntax

// function add(a, b = 1) {
//   return a + b;
// }

const add = (a, b = 1) => a + b;

console.log(add(1));

/**
  CHALLENGES
*/
