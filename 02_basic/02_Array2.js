const marvel_heroes = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
];

const dc_heroes = ["Batman", "Superman", "flash", "Wonder"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes.length);
// console.log(marvel_heroes[5][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes);

// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);
// console.log(all_new_heroes.length);

// const another_array = [1,2,3,...[4,5,6],7,8,9];
// console.log(another_array);

const number_array = [10, 20, 30, 40, 5, [50, 60, 70, 80, [90, 100]]];

// const flat_array = number_array.flat(Infinity); //by default flat() method only goes one level deep
// console.log(flat_array);
// console.log(number_array.flat(2)); // to flatten 2 levels deep
// console.log(number_array.flat()); // to flatten 1 level deep

console.log(Array.isArray("Vishal"));
console.log(Array.from("Vishal"));
console.log(Array.from({ name: "Vishal" })); // it will create an empty array as the object does not have iterable properties
console.log(Array.from([1, 2, 3], (x) => x * 2)); // it will create a new array by mapping each element to x*2
console.log(Array.from({ length: 5 }, (_, index) => index + 1)); // it will create an array [1,2,3,4,5]
console.log(Array.from({ length: 3 }, () => "Hello")); // it will create an array ['Hello','Hello','Hello']

let score = 100;
let score2 = 300;
let score3 = 250;

console.log(Array.of(score, score2, score3)); // it will create an array [100,300,250]


