// const tinderUser = new Object(); // Singleton Object

const userId = {}; // Non-Singleton Object

userId.id = "123ABC";
userId.name = "John Doe";
userId.isLoggedIn = false;

// console.log(userId);

const regularUser = {
  email: "Vishal@chatgpta",
  fullName: {
    userFullName: {
      firstName: "Vishal",
      lastName: "Kumar",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "one", 2: "two", 3: "three" };
const obj2 = { 4: "four", 5: "five", 6: "six" };

// console.log({}, obj1, obj2);

// console.log(Object.assign(obj1, obj2));

const mergedObject = { ...obj1, ...obj2 };
// console.log(mergedObject);

// database of users se
const users = [
  { id: 1, name: "Vishal", age: 18 },
  { id: 2, name: "John", age: 25 },
  { id: 3, name: "Alice", age: 30 },
];

users[1].age;
console.log(userId);

console.log(Object.keys(userId));
console.log(Object.values(userId));
console.log(Object.entries(userId));

console.log(userId.hasOwnProperty("name")); // true
console.log(userId.hasOwnProperty("age")); // false
