let num1 = 32;
let num2 = 47852;

if (num1 % 10 == num2 % 10) {
  console.log(`Number have the same last digit which is ${num1 % 10}`);
} else {
  console.log(`Number dont have last same digit`);
}

// let str = "Apple";
// if ((str[0] == "A" || str[0] == "a") && str.length > 5) {
//   console.log("String is Golden String!");
// } else {
//   console.log("String is not golden string");
// }

// let arr = [7, 9, 0, -2];
// let print = arr.slice(1, arr.length);
// console.log(print);

// let String = prompt("enter is String!");
// if (String == "") {
//   console.log("String is Empty!");
// } else {
//   console.log("String is mot Empty!");
// }

// let str = "VisHAl guPTa";
// let idx = 2;
// if (str[idx] == str[idx].toLowerCase()) {
//   console.log("string is lower case!");
// } else {
//   console.log("string is not lowerCase");
// }

let arr = [2, 1, 4, 5, 6, 8];
let num = 5;

// Element larger then a number

function getElemnts(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
      console.log(arr[i]);
    }
  }
}
getElemnts(arr, num);

// let str = "abcdabcdefgggh";

// function getUniqueChar(str) {
//   let ans = "";

//   for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];
//     if (ans.indexOf(currChar) == -1) {
//       ans += currChar;
//     }
//   }
//   return ans;
// }
// console.log(getUniqueChar(str));

let countary = ["Austrailia", "Germany", "United state America"];

function getLargestString(countary) {
  let ans = countary[0];
  for (let i = 1; i < countary.length; i++) {
    if (ans.length < countary[i].length) {
      ans = countary[i];
    }
  }
  return ans;
}
console.log(getLargestString(countary));

// let str = "VishalGupta";

// function getVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getVowels(str));

// console.log("Hi, There !");

// setTimeout(() => {
//   console.log("Learning set timeout!");
// }, 4000);
// console.log("freom Apna collage");

function getScore(...scores) {
  console.log(scores);
  let total = 0;
  scores.forEach(function (val) {
    total = total + val;
  });
  return total;
}
getScore(2, 3, 5, 6, 8, 7, 4);
console.log(getScore(2, 3, 5, 6, 8, 7, 4));

function abcd(val) {
  val();
}

abcd(function () {
  console.log("hey");
});

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let discounter = discountCalculator(10);
console.log(discounter(200));
greet();

function greet() {
  console.log("Bye");
}

const sayBye = function () {
  console.log("hello");
};

sayBye();
