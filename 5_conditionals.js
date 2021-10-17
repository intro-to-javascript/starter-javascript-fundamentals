/** 
  5. CONDITIONALS
*/

// CONDITIONAL STATEMENTS
// First, specify the condition. If the condition is met, then the first code block 
// (defined in curly brackets {}) is executed. Otherwise, the else block will be executed.
let valueOne = 1;
let valueTwo = 2;
if (valueOne === valueTwo) {
  console.log("Valid");
} else {
  console.log("Invalid");
}
 
// MULTIPLE CONDITIONS
// `else if` allows for conditional chaining to check multiple possibilities, exiting once a comparison evaluates to true

let test1 = 2;
let test2 = 1;
if (test1 === test2) {
  console.log("test1 and test2 are equal");
} else if (test1 > test2) {
  console.log("test1 is greater than test2");
} else {
  console.log("none of the conditions were met");
}

/*
  LOGIC OPERATORS: && (AND), OR (||), !(NOT)
  In some situations, you can combine several conditions within parentheses to evaluate them as a single expression.
  
  && evaluates to true only if all combined values are true.
  || evaluates to true if any of the combined values are true.
  ! reverses the Boolean result of whatever follows it.
*/
let firstValue = true;
let secondValue = false;

if (firstValue === true && secondValue === true) {
  console.log("both values are true!");
} else if (firstValue === true && secondValue === false) {
  console.log("only one value is true");
}

// Not all conditionals need a comparison statement — especially if the values being tested are already booleans!
if (firstValue && secondValue) {
  console.log("both values are truthy!");
} else if (firstValue && !secondValue) {
  console.log("only one value is truthy");
}

// The not operator, !, is a great way to check if something exists in the JS memory system.
let random; // would be undefined
if (!random) {
  console.log("Turns out random is a falsy value that doesn’t exist!");
}

/*
  SWITCH STATEMENTS
  The switch looks for every matching case, then performs instructions until it hits break, which exits the chain.
*/
let transportOption = "car";

switch (transportOption) {
  case "car":
    console.log("Cars are awesome!");
    break;
  case "bus":
    console.log("Buses can transport more people!");
    break;
  case "metro":
    console.log("The metro is huge!");
    break;
  default:
    console.log("Whatt??");
}

/*
  MULTI-CASE SWITCH
  switch can be used to funnel multiple cases to the same instruction. Just list cases together     before the instruction/break combo, and you can cleanly handle similar cases:
*/
let seasonCheck = "autumn";
switch (seasonCheck) {
  case "autumn":
  case "fall":
    console.log("It's fall now!");
    break;

  case "spring":
  case "getting warmer":
    console.log("Spring time is near");
    break;
}

/** 
  CHALLENGES:
  
  1. Write a JavaScript function called printLarger() that accepts two integers as arguments and returns the larger integer as the output

  - Write a JavaScript function called greeting()
  - It should accept hour as the parameter
  - If the hour is less than 12, return a "Good morning" greeting
  - If the hour is between 12 and 18, return a "Good afternoon" greeting
  - If the hour is between 18 and 24, return a "Good night" greeting
  - Otherwise return "Invalid hour input":

  2. FizzBuzz: Log all numbers from 1 - 100.
  - If a number is divisible by 3 log "Fizz" instead of the number.
  - If a number is divisible by 5 log "Buzz" instead of the number.
  - If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
*/
*/
