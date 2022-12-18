/*3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true*/

function oddEl(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length / 2 !== 0) {
      return true;
    }
  }
}

console.log(oddEl([1, 2, 9, 2, 1]));

/*b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

function middleEl(arr) {
  let result;
  if (arr.length % 2 === 0) {
    return "Array has even number od elements!!";
  } else {
    result = arr.length / 2 + 0.5;
    return result;
  }
}
console.log(middleEl([-1, 8.1, 3, 6, 2.3, 44, 2.11]));