/*4. Write a function that filters all even elements of the array.
Input: [6, 11, 9, 0, 3]
Output: [6, 0] */

function evenFilter(array) {
  return array.filter(element => element % 2 === 0);
}

console.log(evenFilter([6, 11, 9, 0, 3]));
