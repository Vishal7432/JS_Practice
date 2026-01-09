// in memory database of datatypes
// mainly two main stores:
// 1. primitive store (call by value )
// 2. non-primitive store (reference store)

/********************************************** Primitive Datatypes ********************************************* */
// 1. Number
let score = 33; // integer
let score2 = 33.44; // floating point number
// console.log(typeof score); // number
// console.log(typeof score2); // number
// both integer and floating point numbers are of type 'number'

// 2. String
let studentName = "John Doe"; // double quotes
let studentName2 = "Jane Doe"; // single quotes
let studentName3 = `Student Name: ${studentName}`; // backticks (template literals)
// console.log(typeof studentName); // string
// console.log(typeof studentName2); // string
// console.log(typeof studentName3); // string
// all are of type 'string'

// 3. Boolean
let isLoggedIn = true; // or false
// console.log(typeof isLoggedIn); // boolean
// only two values: true or false

// 4. Undefined
let someVariable; // variable declared but not assigned
// console.log(typeof someVariable); // undefined
// default value of uninitialized variables
// type is 'undefined'

// 5. Null
let emptyValue = null; // explicitly assigned to no value
// console.log(typeof emptyValue); // object (this is a known quirk in JavaScript)
// represents absence of any value
// type is 'object' due to legacy reasons

// 6. Symbol (ES6 feature)
let uniqueId = Symbol("id");
// console.log(typeof uniqueId); // symbol
// used to create unique identifiers

// 7. BigInt (ES11 feature)
let bigIntNumber = BigInt(9007199254740991); // or 9007199254740991n
// console.log(typeof bigIntNumber); // bigint
// used for integers larger than 2^53 - 1

/******************************************** Non-Primitive Datatypes ******************************************** */
// 1. Object
let student = {
  name: "John Doe",
  age: 21,
  isEnrolled: true,
};
// console.log(typeof student); // object
// collection of key-value pairs

// 2. Array
let scores = [33, 44, 55, 66];
// console.log(typeof scores); // object
// special type of object for ordered collections

// 3. Function
function greet() {
  return "Hello, World!";
}
// console.log(typeof greet); // function
// block of code designed to perform a particular task
// type is 'function'

/********************************************** Summary ******************************************************* */
// Primitive Datatypes: Number, String, Boolean, Undefined, Null, Symbol
// Non-Primitive Datatypes: Object, Array, Function
// Use 'typeof' operator to check datatype of a variable
// Understanding datatypes is crucial for effective programming in JavaScript
// Datatypes affect how operations and functions behave

// js is dynamically typed language
// variables can hold any datatype and can be changed at runtime
let data = 33; // number
data = "Hello"; // string
data = true; // boolean
data = null; // null
data = { name: "John" }; // object
// this flexibility allows for rapid development but requires careful handling of types

// type coercion happens in js
// implicit conversion of one datatype to another during operations
let result = "3" + 2; // '32' string
// console.log(typeof result); // string
// console.log(result); // '32'

// +++++++++++++++++++++++++++++++ Stack and Heap Memory +++++++++++++++++++++++++++++++ //
// Primitive datatypes are stored in stack memory
let a = 10;
let b = a; // b gets a copy of the value of a
b = 20; // changing b does not affect a
// console.log(a); // 10
// console.log(b); // 20

// Non-primitive datatypes are stored in heap memory
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 references the same object as obj1
obj2.name = "Bob"; // changing obj2 affects obj1
// console.log(obj1.name); // "Bob"
// console.log(obj2.name); // "Bob"
// Understanding stack vs heap memory is important for managing data and performance in JavaScript

/********************************************** End ******************************************************* */
