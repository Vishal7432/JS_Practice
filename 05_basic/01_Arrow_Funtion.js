// Arrow Function

const user = {
  username: "Vishal",
  age: 24,
  // this is basically used to refer to the current object
  // and also current context ko refer karta hai
  // but
  about: function () {
    console.log(this.username, this.age);
    console.log(this);
  },
};

// user.about();
// user.username = "Amit";
// user.about();

// console.log(this); // this will refer to the global object

// Arrow function does not have its own 'this' context
// const user1 = {
//   username: "Vipin",
//   age: 25,
//   about: () => {
//     console.log(this.username, this.age);
//   },
// };

// user1.about();
// here this will refer to the global object
// in browser it will be window object
// in node js it will be empty object

// function chai() {
//   let username = "Chai wala";
//   console.log(this.username); // why undefined? // because in strict mode, 'this' is undefined in functions not called as methods of an object
// }
// chai();

// Arrow function me this bahar wale context ko refer karta hai
const chai = () => {
  let username = "Chai wala";
  console.log(this.username); // still undefined
};
// chai();

// arrow
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// emplicit return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

// explicit return
const addTwo = (num1, num2) => ({ username: "vishal" });

console.log(addTwo(3, 5));

//+++++++++++++++++++++++++++++Second section ++++++++++++++

// Immediatety Invoked Function Expression (IIFE)

// IIFE basically is used to reduce global scope polution ko hatane ke liye used karte hai

(function chai() {
  /// Ye Named IIFE hai
  console.log("DB Connected");
})();

(() => {
  // koi name nahi hai IIFE
  console.log("DB Connected");
})();

((name) => {
  console.log(`DB Connected ${name}`);
})("Vishal");
