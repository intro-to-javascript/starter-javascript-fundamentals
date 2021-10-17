/** 
  2. ARRAYS
*/

// Array syntax: [element1, element2, element3, ...]
const cryptocurrencies = ["bitcoin", "ethereum", "polkadot"];

/* 
  ACCESSING ARRAY VALUES
*/
console.log(cryptocurrencies[0]);
console.log(cryptocurrencies[1]);
console.log(cryptocurrencies[2]);

// We can store each element in a variable for reuse
const bitcoin = cryptocurrencies[0];
const ethereum = cryptocurrencies[1];
const polkadot = cryptocurrencies[2];

// It's possible to store any data type in an array!
const bag = ["bitcoin", null, 1, undefined];
console.log(bag);

/*
  EXERCISE: Create your own array! It can have store anything and have any number of elements.
*/

/*
  Use the .length property to find how many elements are in your array (useful for looping)
*/
console.log(cryptocurrencies.length);

/*
  ARRAY METHOD: .push()
  The .push method adds an element to the end of the array.
*/
cryptocurrencies.push("strawberries");
console.log(cryptocurrencies);

/*
  ARRAY METHOD: .pop()
  The .pop method removes the last element in the array. 
*/
console.log("before pop", cryptocurrencies);
cryptocurrencies.pop();
console.log("after pop", cryptocurrencies);

/*
  ARRAY METHOD: .unshift()
  The .unshift method adds the element inside the parentheses to the beginning of the array.
*/
console.log("before unshift", cryptocurrencies);
cryptocurrencies.unshift("cardano");
console.log("after unshift", cryptocurrencies);

/*
  ARRAY METHOD: .shift()
  The .shift method removes the first element in the array.
*/
console.log("before shift", cryptocurrencies);
cryptocurrencies.shift();
console.log("after shift", cryptocurrencies);

/*
  ARRAY METHOD: .indexOf()
  Use .indexOf() to see the index value of any element in the array.
*/
console.log(cryptocurrencies.indexOf("ethereum")); // 1
console.log(cryptocurrencies.indexOf("apple")); // returns -1

// How about when the item is in the array twice?”
cryptocurrencies.push("bitcoin");
console.log(cryptocurrencies.indexOf("bitcoin")); // returns 0

/*
  ARRAY METHOD: .reverse()
*/
cryptocurrencies.reverse();
console.log("after reverse:", cryptocurrencies);

/*
  ARRAY METHOD: .splice()
  The .splice method removes specific items from the array. 
*/
const anotherCryptocurrencies = ["chainlink", "algorand", "curve"];
// The first number indicates the index where removal begins,
// and the second number indicates the total number of items to remove.
anotherCryptocurrencies.splice(1, 1);
console.log("after splice:", anotherCryptocurrencies);

// If you use a third value in the .splice method, it will add that value
// into your array at the location indicated by the first value.
anotherCryptocurrencies.splice(1, 0, "usdc");
// 1st value = index value for splice
// 2nd value = number of items to remove
// 3rd value = item to be added to array
console.log("after splice + usdc:", anotherCryptocurrencies);

/*
  ARRAY METHOD: .join()
  .join combines all the items in the array together into a string.
  If given a string as a parameter, .join will place the given string in between the elements.
*/
const cryptocurrenciesList = cryptocurrencies.join(" and ");
console.log("cryptocurrenciesList:", cryptocurrenciesList);

/*
  MULTI-DIMENSIONAL ARRAYS
*/
const vegetables = [
  ["kiwi", "lettuce"],
  ["carrots", "celery"],
];

console.log(vegetables[1][1]);

/*
  UPDATING AN ELEMENT IN AN ARRAY
*/
vegetables[0][1] = "spinach";
console.log(vegetables);
