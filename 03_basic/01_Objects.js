// Singleton Object
const singleton = {
  name: "Singleton Object",
  greet() {
    return `Hello from ${this.name}`;
  },
};

console.log(singleton.greet()); // Output: Hello from Singleton Object

// Object Literal with Properties and Methods

const mySymbol = Symbol("key1");

const person = {
  firstName: "John",
  lastName: "Doe",
  [mySymbol]: "value1",
  "full name": "John Doe",
  age: 18,
  email: "johndoe@gmail.com",
  isLoggedIn: false,
  lastLoginDays: [1, 2, 5],

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// console.log(person.firstName);
// console.log(person["age"]);
// console.log(person["full name"]);
// console.log(person[mySymbol]);

person.age = 25;
// console.log(person.age); // Output: 25

// Object.freeze();
person.age = 30; // This will not change the age property
// console.log(person);
// console.log(person.fullName()); // Output: John Doe

person.greet = function () {
  console.log("Hello there!");
};

person.greetTwo = function () {
  console.log(`Hello there! How are you, ${this.firstName}`);
};
console.log(person.greetTwo()); // Output: Hello there! How are you, John

console.log(person.greet()); // Output: Hello there!
