/** 
  3. OBJECTS
  - Objects group data into key-value pairs
  - declared with object literal {}
*/

const pet = {
  id: 5566,
  name: "Kitty",
  born: 1997,
  type: "cat",
  // Methods are actions that can be performed on objects.
  meow: function () {
    return `${this.name} meows!`; // Since the pet object owns the meow() function, `this` points to pet.
  },
  ancestry: {
    mother: {
      name: "Katty",
    },
    father: {
      name: "Albus",
    },
  },
};

// Accessing name property
console.log(pet.name);
// console.log(pet["name"])
console.log(`${pet.name} is a ${pet.type}. ${pet.meow()}`);

// Adding a new property
pet.origin = "Taiwan";

// Deleting a property and its associated value
delete pet.origin;

// Accessing nested property
console.log(pet.ancestry.father.name);

// Displaying objects
console.log(pet);
console.log(Object.values(pet));
console.log(Object.keys(pet));

// Stringifying an object
console.log(JSON.stringify(pet)); // JSON-notated string

/** 
  CHALLENGES
*/
