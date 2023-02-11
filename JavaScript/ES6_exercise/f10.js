/* 10. Write a function that checks if the given array is an array of positive integer values.
Input: [3, 11, 9, 5, 6]
Output: yes
Input: [3, -12, 4, 11]
Output: no*/

const isPosInt = arr => {
  for (let val of arr) {
    if (!Number.isInteger(val) || val <= 0) {
      return false;
    }
  }
  return true;
};

const input1 = [3, 11, 9, 5, 6];
console.log(isPosInt(input1) ? 'yes' : 'no');

const input2 = [3, -12, 4, 11];
console.log(isPosInt(input2) ? 'yes' : 'no');

// function posInt(arr) {
//   return arr.every(
//     value => typeof value === 'number' && value > 0 && value % 1 === 0
//   );
// }

// console.log(posInt([3, 11, 9, 5, 6]));

// console.log(posInt([3, -12, 4, 11]));

const isPosInt1 = arr => {
  for (let val of arr) {
    if (!Number.isInteger(val) || val <= 0) {
      return 'no';
    }
  }
  return 'yes';
};

const inputa = [3, 11, 9, 5, 6];
console.log(isPosInt1(inputa));

const inputb = [3, -12, 4, 11];
console.log(isPosInt1(inputb));
