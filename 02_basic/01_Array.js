// array
let fruits = [
  "Apple",
  "Banana",
  "Mango",
  20,
  null,
  true,
  undefined,
  -5.5,
  "Orange",
];
// console.log(fruits);

// Array Methods

let myArr = [1, 2, 3, 4, 5, 6];
// myArr.push(7);
// myArr.push(8, 9);
// myArr.push("Vishal");
// console.log("After Push: ", myArr);

// myArr.pop();
// myArr.pop();
// console.log("After Pop: ", myArr);

// myArr.unshift(0);
// console.log("After Unshift: ", myArr);
// myArr.shift();
// console.log("After Shift: ", myArr);

// console.log("Index of 4: ", myArr.indexOf(4));
// console.log("Index of 10: ", myArr.indexOf(10)); // -1

// console.log("Includes 5: ", myArr.includes(5));
// console.log("Includes 10: ", myArr.includes(10));

// const newArr = myArr.join("-"); // converts array to string with specified separator
// console.log("Joined Array: ", newArr);

// slice
// const slicedArr = myArr.slice(2, 5); // [2, 5)
// console.log("Sliced Array: ", slicedArr); // starts from index 2 to index 4

// splice
// console.log("Original Array: ", myArr);
// myArr.splice(2, 3); // start index, number of elements to remove
// console.log("After Splice: ", myArr); // so basically removes 3 elements starting from index 2

// manipulate array while splicing
console.log("Original Array: ", myArr);
myArr.splice(0, 2, 10, 11, 12); // start index, number of elements to remove, elements to add
console.log("after splice Array: ", myArr);

// ++++++++++++++++++++++++++++++ Exercises ++++++++++++++++++++++++++++++

// 1. Create an array of your favorite colors and add two more colors to the end of the array.
let colors = ["Red", "Blue", "Green"];
colors.push("Yellow", "Purple");
console.log("Favorite Colors: ", colors);

// 2. Remove the first color from the array and log the updated array.
colors.shift();
console.log("After Removing First Color: ", colors);

// 3. Find the index of a specific color in the array.
let indexOfGreen = colors.indexOf("Green");
console.log("Index of Green: ", indexOfGreen);

// 4. Create a new array that contains only the first two colors from the original array.
let firstTwoColors = colors.slice(0, 2);
console.log("First Two Colors: ", firstTwoColors);

// 5. Replace the second color in the array with a new color.
colors.splice(1, 1, "Orange");
console.log("After Replacing Second Color: ", colors);

// 6. Create a function that takes an array of numbers and returns a new array with each number squared.
function squareNumbers(arr) {
  return arr.map((num) => num * num);
}
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = squareNumbers(numbers);
console.log("Squared Numbers: ", squaredNumbers);

