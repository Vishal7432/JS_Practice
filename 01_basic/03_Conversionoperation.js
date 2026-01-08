let score = "3acda"; // null type";

// console.log(typeof score); // number
// console.log(typeof score); // number

let value = Number(score); // conversion from string to number
// console.log(typeof value); // number
// console.log(value); // 0

// "33" => number 33
// "33.44" => number 33.44
// "33abc" => NaN

let isLoggedIn = 0; // 1 means true
// let booleanIsLoggedIn = Boolean(isLoggedIn); // conversion from number to boolean
// console.log(booleanIsLoggedIn); // true

// 0 => false
// 1 => true
// "" => false
// "abc" => true

let someNumber = 33;
let stringNumber = String(someNumber); // conversion from number to string
// console.log(typeof stringNumber); // string
// console.log(stringNumber); // "33"
// 33 => "33"
/*
// Implicit Conversion
let result = "3" + 2; // '32' string
console.log(typeof result);
console.log(result);

let result2 = "3" - 2; // 1 number
console.log(typeof result2);
console.log(result2);
let result3 = "3" * "2"; // 6 number
console.log(typeof result3);
console.log(result3);
let result4 = "3" / "2";
console.log(typeof result4);
console.log(result4);
let result5 = "3" + true; // '3true' string
console.log(typeof result5);
console.log(result5);
let result6 = "3" - true; // 2 number
console.log(typeof result6);
console.log(result6);
let result7 = "3" + undefined; // '3undefined' string
console.log(typeof result7);
console.log(result7);

let result8 = "3" - undefined; // NaN number
console.log(typeof result8);
console.log(result8);

let result9 = "3" + null; // '3null' string

let score3 = 3 + +"2"; // 5 number (unary plus converts "2" to 2)
console.log(typeof score3);
console.log(score3);  */

/**********************************************Operations ********************************************* */

// let value = 3;
let negValue = -value; // unary negation
// console.log(negValue); // -3

let strValue = "Hello";
let strValue2 = "vishal";

let str3 = strValue + " " + strValue2; // concatenation
// console.log(str3); // Hello vishal

console.log("5" + 3); // '53' string
console.log("5" - 3); // 2 number
console.log("5" * "2"); // 10 number
console.log("10" / "2"); // 5 number
console.log("5" + true); // '5true' string
console.log("5" - true); // 4 number
console.log("5" + undefined); // '5undefined' string
console.log("5" - undefined); // NaN number
console.log("5" + null); // '5null' string
console.log("5" - null); // 5 number

console.log("10" + 2 + 3); // '1023' string
console.log(10 + 2 + "3"); // '123' string
console.log("10" - 2 - 3); // 5 number
console.log(10 - 2 - "3"); // 5 number
