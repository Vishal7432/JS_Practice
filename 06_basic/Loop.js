// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greeting = "Hello World!";
for (const greet of greeting) {
  //   console.log(`All the char of greting => ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

// const myObject = {
//   game1: "NFS",
//   game2: "PBG",
// };

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);     /// object are not iterable
// }

const myObject = {
  js: "JavaSrcipt",
  cpp: "C++",
  rb: "Ruby",
  java: "java",
};

for (const key in myObject) {
  console.log(myObject[key]);
}
