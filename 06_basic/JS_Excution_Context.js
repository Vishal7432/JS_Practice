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

// UnderStanding code line by

// Step 1
// Global Execution => this

// Step 2
// Memory Phase

// Val1 = undefiend
// Val2 = undefiend
// addNum = defination
// result1 = undefiend
// result2 = undefiend

// Step 3
// Execution Phase

// val1 = 10
// val2 = 5
// addNum = fir se ab addNum ke ander memory phase(new variable environment) ans execution phase(execution thread)
// ||
// ||
// memory phase
// Val1 = undefiend
// Val2 = undefiend
// total = undefiend
// -------------------- ye box delete bhi hota hai after code run
// execution phase
// num1 = 10
// num2 = 5
// total = 15  ------->   ye total Global Execution
