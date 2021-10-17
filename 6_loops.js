/**
  6. LOOPS
*/

/** 
  FOR STATEMENT
*/
for (let i = 0; i < 6; i++) {
  console.log(i);
}

// Let's break down the syntax of the for loop...When creating a for loop, we need to make three declarations:
// 1. Define a variable to act as our iterator, typically named i.
// 2. Establish a condition for the loop to stop, called the terminating condition.
// 3. Increment the iterator variable (or decrement, if the loop goes backward).

/*
Iteration   i    i < 6?  i++
1           0      true    1
2           1      true    2
3           2      true    3
4           3      true    4
5           4      true    5
6           5      true    6
7           6      false    
*/

// Looping through an array
const students = ["Abe", "Benji", "Cara", "Dana"];
for (let i = 0; i < students.length; i++) {
  console.log(students[i]); // outputs each name in the list, one at a time
}

// FOR...OF STATEMENT
for (let student of students) {
  console.log(student); // logs Abe, Benji, Cara, Dana
}

const word = "goodbye";

for (const letter of word) {
  console.log(letter);
}

// BONUS: Learn about forEach().
// Reference: https://www.w3schools.com/jsref/jsref_foreach.asp

/**
  WHILE STATEMENT
  The while loop will run as long as a condition remains true. Be careful to ensure the condition eventually gets reached to avoid infinite loops!
*/
let i = 0;
while (i < students.length) {
  console.log(students[i]);
  i++;
}

// // initialize passwordGuess variable
// let passwordGuess = "";

// // keep prompting the user for a password if the password is incorrect
// while (passwordGuess !== "secret") {
//   passwordGuess = prompt("What is your password?");
// }

// // show a success message if the user's password is correct
// alert("Correct password!");

/**
  CHALLENGE 1: Create a function that accepts an integer `n` and returns an array containing ALL even numbers up to `n`.
*/

/**
  CHALLENGE 2: Developers typically use the while loop in situations where they don't know how many times the program would need to loop. 
  
  Use the [prompt() function](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) to write a while loop that will continue to ask the user for the password until they enter the password "secret".
*/
