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

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

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
  // console.log(key);
  // console.log(myObject[key]);
}

// const programing = ["js", "rb", "py", "java", "cpp"];

// for (const key in [programing]) {
//   console.log(key);
//   console.log(programing[key]);
// }

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("Fr", "France");
// map.set("IN", "India");

// for (const [key, value] in map) {
//   console.log(key, `:-`, value);
// }

// ++++++++++++++++++++++++++++++++++++++ High Order function ++++++++++++++++++++++++++

const codings = ["js", "rb", "py", "java", "cpp"];

// codings.forEach(function (value)  {
//   console.log(value);
// });

// codings.forEach((item) => {
//   console.log(item);
// });

// function printme(item) {
//   console.log(item);
// }

// codings.forEach(printme);

// codings.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const mycoding = [
  {
    languageName: "javascript",
    languageFilename: "js",
  },

  {
    languageName: "c++",
    languageFilename: "cp",
  },
  {
    languageName: "java",
    languageFilename: "java",
  },
  {
    languageName: "Python",
    languageFilename: "py",
  },
];

mycoding.forEach((item) => {
  console.log(item.languageName);
});
