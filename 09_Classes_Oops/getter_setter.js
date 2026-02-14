class User {
  constructor(email, password) {
    ((this.email = email), (this.password = password));
  }
  set email(value) {
    this._email = value;
  }
  get email() {
    return this._email.toUpperCase();
  }
  get password() {
    return `${this._password}amit127`;
  }
  set password(value) {
    this._password = value;
  }
}

const amit = new User("amitgupta@gmail.com", "abc");
console.log(amit.password);
console.log(amit.email);
