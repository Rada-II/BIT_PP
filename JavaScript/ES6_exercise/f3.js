/*3. Write a function that increases each element of the given array by the given value. If the value is
omitted, increase each element of the array by 1.
Input: [4, 6, 11, -9, 2.1], 2
Output: [6, 8, 13, -7, 4.1] */
function increaseArray(array, value = 1) {
  return array.map(element => element + value);
}

console.log(increaseArray([4, 6, 11, -9, 2.1], 2));
