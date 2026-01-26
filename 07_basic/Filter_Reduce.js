const codings = ["js", "rb", "py", "java", "cpp"];

const value = codings.forEach((item) => {
  // foreach koi value return nahi karta.
  //   console.log(item);
  return item;
});

// console.log(value);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4); // jabhi hum filter use karte hai to hume callback function millta hai jo har ek element pe chalta hai aur jaha condition true hoti hai wahi element naya array me jata hai.
// console.log(newNums);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
// return num > 4; // explicit return karta hai arrow function me.
// });

const newNums = [];

// myNums.forEach((num) => {
// if (num > 4) {
//   newNums.push(num);
// }
// });

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// let newBooks = books.filter(
//   (book) => book.genre === "Science" && book.publish >= 2000,
// );

const newBooks = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "History";
});

console.log(newBooks);
