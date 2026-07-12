const name ='Parth Saini'; // String Literal, Primitive String

const upperName = name.toUpperCase(); // it will return a new string in uppercase, but it will not change the original string
console.log(name); // String is immutable, so it will not change the original string
console.log(upperName); // Memory is allocated for the new string in the heap, and it will be garbage collected when it is no longer referenced
const count= 10;

console.log(name + " " + " Value" + " " + count);

const gameName = new String("Cricket"); // String Object
console.log(typeof gameName);
console.log(gameName.toUpperCase())
console.log(gameName[0]);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('c'));
console.log(gameName.__proto__);

let str = "JavaScript"; // length = 10
console.log(str.substring(0));
// Returns a new string from index 0 to the end of the string.
// The original string is not modified.

console.log(str.substring(0, 4));
// Returns a new string from index 0 up to (but not including) index 4.
// The original string is not modified.

console.log(str.substring(6, 4));
// If the start index is greater than the end index,
// substring() automatically swaps the two indexes.
// This is equivalent to substring(4, 6).

console.log(str.substring(-2));
// Negative indexes are treated as 0.
// This is equivalent to substring(0).

console.log(str.slice(0));
// Returns a new string from index 0 to the end of the string.
// The original string is not modified.

console.log(str.slice(-6));
// Negative indexes count from the end of the string.
// Since the string length is 10, -6 becomes index 4.
// Returns the substring from index 4 to the end.

console.log(str.slice(0, 4));
// Returns a new string from index 0 up to (but not including) index 4.
// The original string is not modified.

console.log(str.slice(-8, 4));
// Since the string length is 10, -8 becomes index 2.
// Returns the substring from index 2 up to (but not including) index 4.

console.log(str.slice(6, 2));
// Returns an empty string because slice() does not swap the indexes
// when the start index is greater than the end index.

console.log(str.slice(-5, -2));
// Negative indexes are calculated from the end.
// Returns characters from index 5(10-5) up to (but not including) index 8(10-2).

const newStr = " Parth ";
console.log(newStr)
console.log(newStr.trim()); // Removes whitespace from both ends of the string and returns a new string. The original string is not modified.

const url = "https://www.example%20test.com";

console.log(url.replace("https://", "http://")); // Replaces the first occurrence of "https://" with "http://". Returns a new string. The original string is not modified.
console.log(url.replace("%20", "-")); // Replaces the first occurrence of "%20" with "-". Returns a new string. The original string is not modified.

console.log(url.includes("example")); // Returns true if the string contains "example", otherwise returns false. The original string is not modified.
console.log(url.includes("subdar")); // Returns false if the string does not contain "subdar", otherwise returns true. The original string is not modified.

const gameName2 = "Part-h-Saini"; 
console.log(gameName2.split("-")); // Splits the string at each occurrence of "-" and returns an array of the resulting substrings. The original string is not modified.