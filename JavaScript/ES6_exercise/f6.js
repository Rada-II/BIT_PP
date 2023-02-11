/* 6. Write a function that filters all integer numbers from the given array.
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
Output: [7, 8]*/
function filterIntegers(array) {
  return array.filter(element => Number.isInteger(element));
}

console.log(filterIntegers([1.6, 11.34, 9.23, 7, 3.11, 8]));
