/*1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false*/

function checkString (string){
    if (typeof string === "string") {
        return true
    }else return false
}
console.log(checkString ("My random string"));
console.log(checkString (12));

/*2. Write a function to check whether a string is blanks or not.
"My random string" -> false
" " -> true
12 -> false
false -> false*/

function checkStringBlank (input){
    if(typeof input !== "string"){
        return false;
    }
    //console.log(input);
    input = input.trim();
    //console.log(input + " " + input.length);

    if (input.length == 0)
    return true;
    else
    return false;
}

console.log(checkStringBlank ("My random string"));
console.log(checkStringBlank (" "));
console.log(checkStringBlank (12));
console.log(checkStringBlank (false));


/*3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"*/
function concatenatesString (string, number) {
let multiString = "";

for(let i = 0; i < number; i++){
   multiString += string;
}
return multiString;
}

console.log(concatenatesString ("Ha", 3));

/*4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2*/

function letterOccurrences (string, letter){
    let counter = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === letter){
            counter ++
        }
    }
    return counter;   
}

console.log(letterOccurrences ("My random string", "n"));
/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.*/

function firstOccurrence (string, letter){
    let position = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === letter){
            position = i;
            break;
        }else {
            position = -1;
        }
    }
    return position;   
}

console.log(firstOccurrence ("Radana", "a")); 

function firstOccurrence (string, letter){
    
    string = string.indexOf(letter);
    return string;
}
console.log(firstOccurrence("radana", "b"));


/*6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.*/


function lastOccurrence (string, letter){
    let position = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === letter){
            position = i;
            
        }else {
            position = -1;
        }
    }
    return position;   
}

console.log(lastOccurrence ("Radana", "a")); 

function lastOccurrence (string, letter){
    
    string = string.lastIndexOf(letter);
    return string;
}
console.log(lastOccurrence("radana", "c"));
/*7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"] */

function convertStringIntoArray (string) {
    let array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      array[i] = null;
    } else array[i] = string[i];
  }
  return array;
}
console.log(convertStringIntoArray ("My random string"));
console.log(convertStringIntoArray ("Random"));

function convertStringIntoArray1 (string) {
    let array = string.split('');
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      array[i] = null;
    } 
  }
  return array;
}
console.log(convertStringIntoArray1 ("My random string"));
/*8. Write a function that accepts a number as a parameter and check if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/

function primeNumber (number){
    let result = "";
    for (let i = number - 1; i > 1; i --) {
        if(number % i === 0){
            result = "number is not prime";
            break;
        }else result = "number is prime";

    }
    return result;
}
console.log(primeNumber(11));
/*9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" ->  My-random-string"*/

function replaceSpaces(string, x) {
    if(x === ""){
        x="-";
    }
    string = string.replaceAll(" ", x);
    return string;
}
console.log(replaceSpaces("My random string", ""));
console.log(replaceSpaces("My random string", "_"));
console.log(replaceSpaces("My random string", "+"));


/*10. Write a function to get the first n characters and add “...” at the end of newly created string.*/

// function newlyString(string, number) {
//     if (string.length > number) {
//       return string.slice(0, number) + "...";
//     } else {
//       return string;
//     }
//   }
//   var result = newlyString("My random string", 7);
//   console.log(result);

  function newlyString(string, number) {
    let newString = "";
    for (let i = 0; i < number; i++) {
        newString += string[i];
        //console.log(newString);       
    }
    return newString + "..."
  }
  console.log(newlyString("My random string", 4));

  
/*11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]*/
function filterNumber(array) {
    var result = [];

  for (i = 0; i < array.length; i++) {
    if (isFinite(array[i])) {
      result[result.length] = parseFloat(array[i]);
    }
  }
  return result;
}

function filterNumbers (array){
    newlyArray = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] !== NaN)
        newlyArray[i] = array[i];
    }
    return newlyArray
}
let result = filterNumber(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(result);

/*12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.*/

function retirement(yearOfBirth, sex) {
    let result = "";
    let age = 2022 - yearOfBirth;

    if (sex === "men") {
      if (age < 65) {
        result = "You have " + (65 - age) + " years until retirement";
      } else {
        result = "You are already retired";
      }
    }

    if (sex === "women") {
      if (age < 60) {
        result = "You have "  + (60 - age) + " years until retirement";
      } else {
        result = "You are already retired";
      }
    }

    return(result);
  }
  let func = retirement(1965, "men"); 
  console.log(func);

/*13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th */

function correctSuffix(number) {
    let first10 = number % 10,
        allOtherNumbers = number % 100;
    if (first10 == 1 && allOtherNumbers != 11) {
        return number + "st";
    }
    if (first10 == 2 && allOtherNumbers != 12) {
        return number + "nd";
    }
    if (first10 == 3 && allOtherNumbers != 13) {
        return number + "rd";
    }
    return number + "th";
}
console.log(correctSuffix(20));