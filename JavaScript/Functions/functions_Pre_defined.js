/*1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]*/
function arrayStringsIntoNumbers(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (isFinite(array[i])) {
            newArray.push(+array[i]);
        }
    }
    return newArray;
}
console.log(arrayStringsIntoNumbers(["1", "21", undefined, "42", "1e+3", Infinity]));

/*2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: “015false-2247”*/
function joinElements(array) {
    let result = array.filter(function (el) {
        return el !== undefined && el !== null && el !== Infinity && !isNaN(el);
    });
    return result.join("");
}
console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));

function convertArray(array) {
    let result = "";

    for (i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && array[i] !== null) {
            result += array[i];
        }
    }
    return result;
}

/*3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]*/
function filterOutFalsy(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {          //var result = arr.filter(Boolean);
        //console.log(result);//return
        if (array[i]) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}
console.log(filterOutFalsy([15, -22, 47]));
/*4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3*/
function numberOfIntegers(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            counter++;
        }
    }
    return counter;
}
console.log(numberOfIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));
/*5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2 */

function numberOfFloats(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {

        if (typeof (array[i]) === 'number' &&
            !Number.isNaN(array[i]) &&
            !Number.isInteger(array[i]))
            counter++;
    }
    return counter
}
console.log(numberOfFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));


