/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }*/

function smallestEl(array) {
  let smallestEl = Math.min(...array);
  let minLastIndex = array.lastIndexOf(smallestEl);
  return { smallestEl, minLastIndex };
}

console.log(smallestEl([1, 4, -2, 11, 8, 1, -2, 3]));