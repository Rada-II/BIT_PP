/*7. Write a function to capitalize the first letter of a string and returns modified string.
"js string exercises" -> "Js string exercises" */

function capitilize(str) {

  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitilize("js string exercises"));

function capFirstLetter(str) {
  let splitStr = str.split('');
  let capLetter = splitStr[0].toUpperCase();
  return str.replace(str[0], capLetter)
}

console.log(capFirstLetter("js string exercises"));

function capitalizeTheFirstLetter(string) {
  let secondPartOfString;
  let firstLetter;
  let result;

  secondPartOfString = string.slice(1);
  firstLetter = string.slice(0, 1).toUpperCase();
  result = firstLetter + secondPartOfString;

  return result;
}

var result = capitalizeTheFirstLetter("js string exercises");

console.log(result);
