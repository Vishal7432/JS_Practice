const score = 400;

// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(typeof score); // Number
// console.log(typeof balance); // Object

// console.log(balance.toFixed(2));
// console.log(balance.toString());
// console.log(Number.isInteger(score)); // true
// console.log(Number.isInteger(balance)); // false

// console.log(Number.parseFloat("100.30")); // 100.3
// console.log(Number.parseInt("100.30")); // 100

// const otherScore = 232.5864;
// console.log(otherScore.toPrecision(3)); // 233
// console.log(otherScore.toPrecision(4)); // 232.6

// const hunderes = 1000000;
// console.log(hunderes.toLocaleString()); // 1,000,000
// console.log(hunderes.toLocaleString("en-IN")); // 10,00,000

// ++++++++++++++++++++++++++++++ Math Object ++++++++++++++++++++++++++++++

// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;
// console.log(Math.round(area)); // 8
// console.log(Math.floor(area)); // 7
// console.log(Math.ceil(area)); // 8
// console.log(Math.trunc(area)); // 7

// Random Number between 0 and 1
console.log(Math.random()); // 0 to 0.9999
// Random Number between 0 and 100
console.log(Math.random() * 100); // 0 to 99.9999

console.log(Math.floor(Math.random() * 100)); // 0 to 99
console.log(Math.floor(Math.random() * 100) + 1); // 1 to 100

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 to 20

