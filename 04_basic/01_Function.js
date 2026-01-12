// Function

function sayMyName() {
  console.log("v");
  console.log("I");
  console.log("p");
}

// sayMyName();

// function AddTwoNum(num1, num2) {
//   console.log(num1 + num2);
// }

function AddTwoNum(num1, num2) {
  //   let result = num1 + num2;
  return num1 + num2;
}

let result = AddTwoNum(5, 10);
// console.log(result);

function logiinUserMessage(username) {
  if (!username) {
    // console.log("Please enter a valid username");
    return;
  }
  return `Welcome back ${username}!`;
}

// console.log(logiinUserMessage());

// rest parameters

function calculateCartPrice(value1, value2, ...prices) {
  return prices;
}

// console.log(calculateCartPrice(20, 30, 50, 100));

const user = {
  username: "vipin",
  prices: 2500,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
// handleObject({ username: "vishal", price: 3000 });

const myArr = [500, 600, 700, 800];

function hadleArray(accessArr) {
  return accessArr[2];
}

// console.log(hadleArray(myArr));
// console.log(hadleArray([1000, 2000, 3000, 4000]));
