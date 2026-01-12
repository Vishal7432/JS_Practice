// Scope

// var globalVar = "I am a global variable";
// var c = 100;

let b = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Inner Block :", b);
  //    c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Vishal";

  function two() {
    const website = "vipin.com";
    // console.log(username);
  }
  //   console.log(website);
  two();
}

// one();

if (true) {
  const username = "vipin";
  if (username === "vipin") {
    const website = "vipin.com";
    // console.log(username);
    // console.log(website);
  }

  //   console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++++Interview Question++++++++++++++++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5)) // Error: Cannot access 'addTwo' before initialization this is due to the fact that addTwo is defined using a function expression and is not hoisted like function declarations.
const addTwo = function (num) {
  return num + 2;
};
