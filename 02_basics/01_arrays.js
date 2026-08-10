const myArr = ["Parth", 1, "Saini", 3, 4];

const newArr = new Array(0, 1, 2, 3, 4);

console.log(myArr[0]);

// Array Methods

// myArr.push(6);
// myArr.push(9); // Adds a new value to the end of the array
// console.log(myArr);

// myArr.pop(); // Removes the last value from the array
// console.log(myArr);

// myArr.unshift("1"); // Adds a new value to the beginning of the array
// console.log(myArr);

// console.log(myArr.includes(8)) // Checks if 8 exists in the array (returns true or false)
// console.log(myArr.indexOf(8)); // Returns the index of 8, or -1 if it is not found
// console.log(myArr.indexOf(1)); // Returns the index of 1

// const newArr = myArr.join(); // Converts the array into a comma-separated string
// console.log(newArr);

console.log("A", myArr);

// const myn1 = myArr.slice(1,3) // Returns elements from index 1 to 2 (end index is excluded). Does not modify the original array.

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3); // Removes 3 elements starting from index 1. Modifies the original array and returns the removed elements.
console.log(myn2);
console.log("C", myArr);

// const arr = ["Parth", "Saini"];
// console.log(arr.join());
// console.log(arr.join(" ")); // "Parth Saini"
// console.log(arr.join("-")); // "Parth-Saini"
// console.log(arr.join(""));  // "ParthSaini"