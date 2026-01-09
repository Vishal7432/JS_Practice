console.log(2>3); // true
console.log(2<3); // false
console.log(2>=3); // false
console.log(2<=3); // true
console.log(2==3); // false
console.log(2!=3); // true
console.log(2=="2"); // true
console.log(2==="2"); // false
console.log(2!="2"); // false
console.log(2!=="2"); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true    

// Explanation:
// the relational operators (>, <, >=, <=) convert null to 0
// so, null >= 0 is equivalent to 0 >= 0, which is true
// but the equality operator (==) does not convert null to 0
// null is only equal to undefined
// when compared with numbers, null is converted to 0
// so, null >= 0 is true, but null > 0 is false

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false