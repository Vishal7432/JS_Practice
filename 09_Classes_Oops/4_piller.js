// ++++++++++++++++++++++++++++++++++++++++++1=> Encapsulation (Data ko bundle + protect karna)+++++++++++++++++++++++++

//❌ Without Encapsulation (Bad)

let balance = 1000;
balance = balance - 500; // koi bhi change kar sakta hai

//Problem ❌
//👉 Koi bhi balance ko kuch bhi set kar de

//✅ With Encapsulation (Good)

class Account {
  const = balance; // Private

  constructor(amount) {
    this.balance = amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new Account(1000);
acc.withdraw(300);
console.log(acc.getBalance()); // 700

//🎯 Interview me kaise bolna
//Encapsulation is the wrapping of data and methods into a single unit and restricting direct access to the data.

// JS me data private kaise banate hain?
// in js basically make private data in three type

// 1 by clousre function se
function counter() {
  let count = 0; // private
  return function () {
    count++;
    console.log(count);
  };
}

// 2 Private fields (#) – ES6 class
class test {
  #x = 10;
}

// 3 - IIFE / Module pattern se
//Using closures and private class fields (#) we can achieve data hiding in JavaScript.(Optional)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++🔥 Pillar 2: Abstraction+++++++++++++++++++++++++++++++++++
// Abstraction = user ko sirf kaam dikhana, kaise ho raha hai ye chhupa dena
//JS me abstract keyword nahi hota ❌
// Lekin abstraction 3 tarike se achieve hoti hai:

// 1️⃣ Using Methods (Hide logic)
class Payment {
  pay() {
    this.validate();
    this.process();
    console.log("Payment Done");
  }

  validate() {
    console.log("Validating...");
  }

  process() {
    console.log("Processing...");
  }
}

const p = new Payment();
p.pay();

// 2️⃣ Using Interface-like Pattern

class Shape {
  area() {
    throw new Error("Method must be implemented");
  }
}

class Circle extends Shape {
  area() {
    console.log("Circle area");
  }
}

//Shape bas rule define karta
// 👉 Child implement karta

// 3️⃣ Using Closures
function car() {
  function startEngine() {
    console.log("Engine started");
  }

  return {
    start: function () {
      startEngine();
    },
  };
}

const c = car();
c.start();

// ++++++++++++++++++++++++++++ Pillar 3: Inheritance++++++++++++++++++++++++++++++++++++++++
// In inheritance, a child class inherits properties and methods of the parent class, similar to how traits are passed from parents to children.

// exmple:- Inheritance works like a family tree, where a child inherits properties from the parent, such as blood group, genes, or habits.

class Father {
  house() {
    console.log("Owns a house");
  }
}

class Son extends Father {
  bike() {
    console.log("Owns a bike");
  }
}

const s = new Son();
s.house(); // inherited
s.bike(); // own

class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // parent constructor call
    this.age = age;
  }
}

const a = new Child("Rahul", 20);
console.log(c.name); // Rahul
console.log(c.age); // 20

// +++++++++++++++++++++++++++++++++++++++++++Pillar 4 (Last): Polymorphism++++++++++++++++++++++++

// Polymorphism = same method name, different behaviour
class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach((a) => a.sound());

// Polymorphism allows the same method to behave differently based on the object that calls it.
