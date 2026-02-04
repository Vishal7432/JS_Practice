// About Promises

// const { use } = require("react");

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async tsk one");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task Two");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise two was consumed");
});

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("Async task 3");
//     resolve({
//       username: "Amit Gupta",
//       email: "amitgupta@gmail.com",
//       password: "123",
//     });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "Amit Gupta",
        email: "amitgupta@gmail.com",
        password: "123",
      });
    } else reject(`ERROR: Something went wrong`);
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        email: "amitgupta@gmail.com",
        password: "123",
      });
    } else reject(`ERROR: Invalid username and password`);
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const reponse = await promiseFive;
    console.log(reponse);
  } catch (error) {
    console.log(error);
  }
}
// consumePromiseFive();

// async function getAllUser(params) {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUser();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
