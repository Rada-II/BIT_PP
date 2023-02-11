/* 11. Write a function that calculates the product of the elements of the array.
Input: [2, 8, 3]
Output: 48*/
const arr = [2, 8, 3];
const product = arr.reduce((total, current) => total * current);
console.log(product);
