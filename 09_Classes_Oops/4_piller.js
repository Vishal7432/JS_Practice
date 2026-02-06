// 1=> Encapsulation (Data ko bundle + protect karna)

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
