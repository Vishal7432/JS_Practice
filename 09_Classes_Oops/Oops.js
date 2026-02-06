const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
    /// this is basically used to access current context data from onject
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());

const user1 = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getByOwn: function () {
    // console.log(user.username);
    // console.log(this.username);
    console.log(this);
  },
};
// console.log(user1.getByOwn());

// if use this global to empty parathesis ata hai in node.js envorinment but if yor use in web broswer he gives many object values  by window object this is global object
console.log(this);

// Constructor function about

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

// new key about => jabhi hum new key use karte hai to ek empty object create hota hai jise (instance) bolte hai
// ek Constructor function call hota hai new key ke kadan
// jo bhi this create hua hai usme add ho jagange
// milta hai values

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);
