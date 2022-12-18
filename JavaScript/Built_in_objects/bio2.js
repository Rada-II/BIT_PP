/*2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]*/

function remove(array) {
  return Array.from(new Set(array)).sort((a, b) => a - b);
}
console.log(remove([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
