// --------------------------
//#region Section 1
// --------------------------
/**
 * @param {number} x
 * @param {number} y
 * @returns the sum of the two given numbers x and y
 */
function add(x, y) {
  return x + y;
}

/**
 * @param {number} x
 * @param {number} y
 * @returns the difference between the two given numbers x and y
 */
function subtract(x, y) {
  return x - y;
}

/**
 * @param {string} name
 * @returns a greeting depending on the given name
 */
function greet(name) {
  if (typeof name === "undefined") {
    return "Hello!";
  } else {
    return `Hello, ${name}!`;
  }
}

/**
 * @param {int[]} nums
 * @returns the sum of the numbers in the given array nums
 */
function sum(nums) {
  let total = 0;
  for (const n of nums) {
    total += n;
  }
  return total;
}

//#endregion Section 1

// --------------------------
//#region Section 2
// --------------------------
// Write your code here!

//#endregion Section 2

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  // add,
  // subtract,
  // greet,
  // sum,
  // isPositive,
  // getFirst,
  // getLast,
  // findLeast,
  // shareFirstLetter,
  // getFirstLast,
  // shareLastDigit,
};
