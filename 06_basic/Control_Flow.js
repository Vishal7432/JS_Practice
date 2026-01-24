// fasly values

// false, 0, -0, BinInt, 0n, "", null, undefined, NaN.

// truthy values isske alawa sab truthy hai

// "0", 'false', " ", [], {}, function(){}.

const userEmail = [];

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;  // jo value pahle rahega wo wahi assign hoga
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 15;

// console.log(val1);
