// console.log(2 > 1); // true
// console.log(2 < 1); // false
// console.log(2 >= 1); // true
// console.log(2 <= 1); // false
// console.log(2 == 2); // true
// console.log(2 != 1); // false
// console.log(2 == '2'); // true (loose equality, type coercion)
// console.log(2 === '2'); // false (strict equality, no type coercion)

// console.log("2"> 1 ); // true (string '2' is converted to number 2)
// console.log("02"> 1 ); // true (string '2' is converted to number 2)

// console.log(null > 0); // false when comparing null to a number, null is converted to 0, so this becomes 0 > 0 which is false
// console.log(null == 0); // false (when comparing null to a number, null is not converted to 0, so this is false)
// console.log(null >= 0); // true (when comparing null to a number, null is converted to 0, so this becomes 0 >= 0 which is true)

console.log(undefined > 0); // false (undefined is converted to NaN, and any comparison with NaN is false)
console.log(undefined == 0); // false (undefined is not equal to anything except null)
console.log(undefined >= 0); // false (undefined is converted to NaN, and any comparison with NaN is false)

// Note: Avoid null and undefined in comparisons, as they can lead to unexpected results due to type coercion. Always do clean code.
