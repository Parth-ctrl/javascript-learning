// let a = 10;

// console.log(a);
// console.log(++a); // Prefix increment: This will first increment the value of a by 1 and then print it. So, it will print 11.
// console.log(a);

// let b = 15;

// console.log(b);
// console.log(b++); // Postfix increment: This will first print the value of b and then increment it by 1. So, it will print 15 and then b will become 16.
// console.log(b);


let x = 3;
const y = x++; // Postfix increment: This will first assign the value of x to y and then increment x by 1. So, y will be 3 and then x will become 4.

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // Prefix increment: This will first increment the value of a by 1 and then assign it to b. So, both a and b will be 4.

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
