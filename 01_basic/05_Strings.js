const name = "Alice";
const repoCount = 10;

console.log(`Hello, ${name}! You have ${repoCount} repositories.`);
// Output: Hello, Alice! You have 10 repositories.

const gameName = new String("AmitGupta12");

console.log(gameName.length); // Output: 12
console.log(gameName[0]); // Output: A
console.log(gameName.toUpperCase());

console.log(gameName.__proto__); // Output: String {}
console.log(String.prototype); // Output: String {}
// Both outputs will show the String prototype methods and properties

console.log(gameName.charAt(2)); // Output: i
console.log(gameName.indexOf("t")); // Output: 4
console.log(gameName.lastIndexOf("a")); // Output: 9
console.log(gameName.includes("Gupta")); // Output: true
console.log(gameName.startsWith("Amit")); // Output: true
console.log(gameName.endsWith("12")); // Output: true

console.log(gameName.slice(0, 4)); // Output: Amit
console.log(gameName.substring(5, 10)); // Output: Gupta
console.log(gameName.replace("12", "34")); // Output: AmitGupta34
console.log(gameName.toLowerCase()); // Output: amitgupta12
console.log(gameName.trim()); // Output: AmitGupta12 (no change as there are no surrounding spaces)
console.log(gameName.split("t")); // Output: [ 'Ami', 'Gupta12' ]
console.log(gameName.repeat(2)); // Output: AmitGupta12AmitGupta12
console.log(gameName.valueOf()); // Output: AmitGupta12

console.log(typeof gameName); // Output: object