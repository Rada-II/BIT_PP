/*1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string", "JS " ->; "JS My random string"
"My random string", "JS ", 10 ->; "My random JS string"*/

function insertStringIntoString(string, newString, position) {
    if (position === undefined) {
        position = string[0];
    }
    return string = string.slice(0, position) + newString + string.slice(position)
}
console.log(insertStringIntoString("My random string", "JS ", 10));
console.log(insertStringIntoString("My random string", "JS "));
/*2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null]*/

function joinElements(array) {
    newArray = [];
    for (i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && array[i] !== null) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));
/*3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] ->; [15, -22, 47]*/

function filterOut(array) {
    return array.filter(Boolean);
}
console.log(filterOut([NaN, 0, 15, false, -22, '', undefined, 47, null]));
/*4. Write a function that reverses a number. The result must be a number.
12345 ->; 54321 // Output must be a number*/
function reverseNumber(number) {
    number = number + "";
    return number.split('').reverse().join('') * 1;
}
console.log(reverseNumber(12345));
/*5. Write a function to get the last element of an array. Passing a parameter 'n' will return the
last 'n' elements of the array.
[7, 9, 0, -2] ->; -2
[7, 9, 0, -2], 2 ->; [0, -2]*/

function lastElements(array, n) {
    //newArray = [];
    for (i = 0; i < array.length; i++) {
        if (typeof n === "undefined") {
            return array[array.length - 1];
        }

    }
    return array.reverse()
        .slice(0, n)
        .reverse()
}
console.log(lastElements([7, 9, 0, -2], 2));
console.log(lastElements([7, 9, 0, -2]));
/*6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 ->; [0, 0, 0, 0, 0, 0]
2, "none" ->; ["none", "none"]
2 ->; [null, null]*/

function createElements(number, element) {
    array = [];
    if (element === undefined) {
        element = null;
    }
    for (i = 0; i < number; i++) {
        array.push(element);
    }
    return array;
}
console.log(createElements(6, 0));
console.log(createElements(2, "none"));
console.log(createElements(2));
/*7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself 
(also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its 
positive divisors (including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6.
The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128. */

function perfectNumber(num) {
    //var result = "";
    var sum = 0;
    for (var i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (num === sum) {
        return "Number " + num + " is perfect!";
    } else {
        return "Number " + num + " is not perfect!";
    }

    
}
console.log(perfectNumber(28));

/*8. Write a function to find a word within a string.
'The quick brown fox', 'fox' ->; "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' ->; "'aa' was found 2 times"*/

function findWordWithinString (string, word){
    return string.split(word).length - 1;
}
console.log(findWordWithinString ('The quick brown fox', 'fox'));
console.log(findWordWithinString ('aa bb cc dd aa', 'aa'));

/*9. Write a function to hide email address.
"myemailaddress@bgit.rs" ->; "mye...@bgit.rs"*/

function hideEmail(email){
        let string = email.slice(0, 3) + "...@gmail.com";
        return string;
    }
     
    console.log(hideEmail("myemailaddress@bgit.rs"));

/*10. Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] */

function mostFrequent(arr) {
    var mostFrequent = 1;
      var counter = 0;
      var item = ""
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            counter++;
          }

          if (mostFrequent < counter) {
            mostFrequent = counter;
            item = arr[i];
          }
        }

        counter = 0;
      }      
return `the most frequent is ${item}, and it is repeated ${mostFrequent} times`
}

console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));