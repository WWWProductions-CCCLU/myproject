// Find Maximum and Minimum:
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

// Example usage:
const numbers = [5, 2, 9, 1, 7];
console.log(findMax(numbers)); // Output: 9
console.log(findMin(numbers)); // Output: 1

// Sum of Array:
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
const values = [3, 6, 2, 8];
console.log(sumArray(values)); // Output: 19

// Filter Array:
function filterArray(arr, condition) {
  return arr.filter((item) => condition(item));
}

// Example usage:
const numbersToFilter = [10, 15, 20, 25, 30];
const filteredNumbers = filterArray(numbersToFilter, (num) => num > 20);
console.log(filteredNumbers); // Output: [25, 30]
