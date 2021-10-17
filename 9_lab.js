/** 
  8. JAVASCRIPT FUNDAMENTALS LAB
*/

// 1. Write a function, findLongestString(), that takes an array of strings as argument and returns the longest string. Write your function using the a) function declaration syntax, b) function expression syntax, and c) ES6 arrow function syntax.

// 2. Write a function, removeFromArray(), that takes an array and a value as argument and returns an array with all occurrences of the given value removed from the array.
// removeFromArray([1,2,3,2], 2) => [1, 3].

// 3. Learn about the .filter() method: https://www.w3schools.com/jsref/jsref_filter.asp. Use it to create a function, findRestaurantsByRating(restaurants, rating) that accepts a rating and an array of restaurant objects and returns an array of all restaurants above the given rating.
// Example: findRestaurantsByRating([{ rating: 4.6, name: "Yummy"}, {name: "Not Yummy",rating: 3.8}], 4) => [{ rating: 4.6, name: "Yummy"}]

const data = [
  {
    name: "Yummy",
    rating: 4.7,
  },
  {
    name: "Not Yummy",
    rating: 3.8,
  },
  {
    name: "Dragon Food",
    rating: 2.5,
  },
  {
    name: "Marriott",
    rating: 4.2,
  },
];

// 4. Learn about the .map() method: https://www.w3schools.com/jsref/jsref_map.asp. Use it to create a function, roundNumbers(numbers), that accepts an array of numbers and returns them with the number rounded up.
// example: roundNumbers([2.5, 3.6, 5.1, 26.33]) => [3, 4, 6, 27]

// 5. Write a function, shallowCompare(a, b) that shallowly compares two objects, where `a` and `b` are parameters that are objects that contain only primitive data types (string, number, undefined, null, boolean)
// Example: shallowCompare({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
// Example: shallowCompare({ a: 1, b: 1, c:1 }, { a: 1, b: 1 }) => false
// Solution: https://github.com/andrewborisov/javascript-practice/blob/master/objects/solutions/05-is-equal.js
