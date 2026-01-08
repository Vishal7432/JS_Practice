"uses strict"; // treat all JS code as newer version

// alert(3 + 3); /we are node.js, not browser

// Datatypes
let length = 16; // Number
let lastName = "Johnson";
let isLogical = false; // Boolean
let x = { firstName: "John", lastName: "Doe" }; // Object
console.log(typeof length); // Returns "number"
console.log(typeof lastName); // Returns "string"
console.log(typeof isLogical);
console.log(typeof x); // Returns "object" // Returns "object"

// Dynamic Typing
let text = "Hello World";
console.log(typeof text); // Returns "string"

text = 5;
console.log(typeof text); // Returns "number"

//Number => 2 to 53
//bigint => larger than 53
//String => '',"",``
//Boolean => true/false
//null => standalone value
//undefined => value not assigned
//Symbol => unique identifier
//Object => key value pairs

console.log(typeof null); // Returns "object"
console.log(typeof undefined); // Returns "undefined"
console.log(typeof Symbol("id")); // Returns "symbol"
console.log(typeof 9007199254741991n); // Returns "bigint"
console.log(typeof function () {}); // Returns "function"
console.log(typeof NaN); // Returns "number"
console.log(typeof Infinity); // Returns "number"
