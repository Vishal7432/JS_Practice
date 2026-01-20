// JS Execution Context

// {} => Global Execution context banata hai jabhi code js mai likha jata hai
// Inseted value ho ya nahi this ki

// 1 Global E.C.
// 2 Function E.C.
// 3 Eval E.C.

// { } =>
// 1 Memory creation phase
// 2 Execution phase

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result = addNum(val1, val2);
let result2 = addNum(10, 5);
