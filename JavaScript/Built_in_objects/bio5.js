/*5.
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]*/

function given (array, value) {
  let output = array.filter(function(number) {
    return number < value;
  });

  return output;
};
console.log(given ([2, 3, 8, -2, 11, 4], 6));

/*b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]*/

function findStringElement (array, string) {
  let output = [];
  let modArray = array.slice();

  modArray = modArray.map(function (value) {
    return value.toUpperCase();
  });
  for(let i = 0; i < array.length; i++) {
    if(modArray[i].slice(0, string.length) == string.toUpperCase()) {
      output.push(array[i]);
    }
  }

  return output;
};

console.log(findStringElement (["JavaScript", "Programming", "fun", "product"], "pro"));

/*c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it. */

let array = [2, 3, 8, -2, 11, 4];
let value = 6;
let bArray = ["JavaScript", "Programming", "fun", "product"];
let string = "pro";

/* c task */
let arrayC = ["director", "dictator", "doctor", "destructor"];


function filterC (array, value, f) {
  return f(array, value);
}

let outputC = filterC(arrayC, "di", findStringElement);
let outputCtwo = filterC(array, 4, given);

console.log(outputC);
console.log(outputCtwo);