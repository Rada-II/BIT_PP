/*1. Write a JavaScript function that reverses a number. typeof result of the function should
be “number”.
12345 -> 54321 */

function reverseNum(num) {
  let numToStr = num.toString();
  let reverseStr = numToStr.split('').reverse().join('');
  return parseInt(reverseStr);
}

console.log(typeof (reverseNum(12345)));
// Nisi stampala reverse string Radoooooo!!! Radi ti sve kako treba, ali istampaj ga :D 
