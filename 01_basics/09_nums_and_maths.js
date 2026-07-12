// const score = 400;
// console.log(score); // 400

// const balance = new Number(100); // Number Object
// console.log(balance);

// console.log(balance.toString()); // "100"
// console.log(balance.toString().length); // 3

// console.log(balance.toFixed(2)); // "100.00"
// console.log(balance.toFixed(1)); // "100.0"

// const otherBalance = 123.6434;

// console.log(otherBalance.toPrecision(4)); // "123.6"

// const num = 1000000;

// console.log(num.toLocaleString("en-US")); // "10,000"
// console.log(num.toLocaleString()); // "1,000,000" in en-US locale


// ++++++++++++++++Maths++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-5)); // Converts negative number to positive number. 5
// console.log(Math.round(4.6)); // 5; rounds to nearest integer
// console.log(Math.ceil(4.1)); // 5; rounds up to nearest integer
// console.log(Math.floor(4.9)); // 4; rounds down to nearest integer
// console.log(Math.min(4,5,6,7,8,9)); // 4; returns the minimum number from the list of numbers
// console.log(Math.max(3,456,7,8,9)); // 456; returns the maximum number from the list of numbers
console.log(Math.random());
// ✅ Returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).

console.log(Math.random() * 10);
// ✅ Returns a pseudo-random floating-point number between 0 (inclusive) and 10 (exclusive).

console.log((Math.random() * 10) + 1);
// ✅ Returns a pseudo-random floating-point number between 1 (inclusive) and 11 (exclusive).

console.log(Math.floor(Math.random()));
// ❌ Does NOT return a random number between 0 and 1.
// ✅ Always returns 0.

console.log(Math.floor(Math.random() * 10)); 
// ✅ Returns a pseudo-random integer between 0 (inclusive) and 10 (exclusive).

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // returns a pseudo-random integer between 10 (inclusive) and 20 (inclusive).
