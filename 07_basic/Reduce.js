const myNums = [1, 2, 3, 4];

const myTotal = myNums.reduce((accumulator, currentValue) => {
  //   console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
  //   return accumulator + currentValue;
}, 0);

// console.log(myTotal);

// myNums.reduce((accumulator, currentValue, index, array) => {
//   console.log(
//     `Accumulator: ${accumulator}, Current Value: ${currentValue}, Index: ${index}, Array: ${array}`,
//   );
//   return accumulator + currentValue;
// }, 0);

// accumulator: jo value hum return karte hai wo agle iteration me accumulator ban jata hai.
// currentValue: jo current element hai array ka wo hota hai.
// index: current element ka index hota hai.
// array: original array hota hai.
// second argument me hum initial value de sakte hai accumulator ke liye. agar hum nahi dete to pehle element ko leta hai by default.

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalAmount = shoppingCart.reduce((acc, item) => {
  {
    return acc + item.price;
  }
}, 0);

console.log(`Total Bill Amount: ₹${totalAmount}`);
// hum reduce ka use karke kisi bhi array ke values ko ek single value me convert kar sakte hai.
// yaha humne shopping cart me jitne bhi items hai unke prices ko add karke total bill amount nikal raha hai.
