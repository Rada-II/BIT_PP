/* Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       let LOWER = 'abcdefghijklmnopqrstuvwxyz';
"The Quick Brown Fox" -> "tHE qUICK bROWN fOX" */


function swapCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === ch.toUpperCase()) {
      result += ch.toLowerCase();
    } else {
      result += ch.toUpperCase();
    }
  }
  return result;
}


console.log(swapCase("The Quick Brown Fox"))

// let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let LOWER = 'abcdefghijklmnopqrstuvwxyz';

function swapCase(str) {
  let result = "";
  let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let LOWER = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (UPPER.indexOf(ch) !== -1) {
      result += LOWER[UPPER.indexOf(ch)];
    } else if (LOWER.indexOf(ch) !== -1) {
      result += UPPER[LOWER.indexOf(ch)];
    } else {
      result += ch;
    }
  }
  return result;
}

// Test the function
console.log(swapCase("The Quick Brown Fox"));

function lowerCaseFirstLetter(string) {
  let array;
  let result = "";

  array = string.toUpperCase().split(" ");

  for (let i = 0; i < array.length; i++) {
    result += array[i][0].toLowerCase() + array[i].slice(1) + " ";
  }

  return result;

}

let result = lowerCaseFirstLetter("The Quick Brown Fox");

console.log(result);

