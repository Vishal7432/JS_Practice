function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return `${this._password}321`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const amit = new User("amitgupta@gmail.com", "abcd");
// console.log(amit.email);
console.log(amit.password);
