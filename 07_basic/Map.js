const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNums.map((num) => {
  if (num >= 4) return num;
  //   console.log(num);
});

// const newNum = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num > 50);

console.log(newNum);
// map hamesha ek naya array return karta hai jisme callback function se return hui value hoti hai.
