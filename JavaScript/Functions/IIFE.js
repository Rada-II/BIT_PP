/*IIFE = Immediately Invoked Function Expressions
1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]*/

(function (arr) {
    
    let element = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = element;
    console.log(arr);
    // return arr;
})([4, 5, 11, 9]);

// var arr=[4, 5, 11, 9];
// (function (arr) {
//     var a = arr[0];
//     arr[0] = arr[arr.length-1];
//     arr[arr.length-1] = a;
//     console.log(arr);
//     // return arr;
// })(arr);

/*2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20/*

(function (a,b) {

    let surface = a * b;
    console.log(surface);

})(4,5);
/*3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2*/

let input = "prograMming";
(
function (string) {
    let newString = "";
    let count = 0; 

    for(let i = 0; i < string.length; i++){

        if(string[i] === "m" || string[i] === "M"){
            newString += "*";
            count++;
                
        }else if(string[i] !== "m" || string[i] !== "M"){
            newString += string[i];
        }        
           
    }
    console.log(newString, ", " ,count);
}
)(input);

/*4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com */
(function (name, surname) {

    let suggestsEmail = "@gmail.com"
    let email =`${name}.${surname}${suggestsEmail}`     //name + "." + surname + suggestsEmail;
    console.log(email);
    
})("pera","peric");

/*5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28*/
function filter(num) {
    let octalNumber = parseInt(num);
    return octalNumber;       
}
filter(034);    

function calculateDecimal (number,callback){
console.log(callback(number));

}
calculateDecimal(034,filter)

/*6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!*/

function successCallback(){
    return "Your password is cool!";
}
function errorCallback(){
   return "Your password is invalid!";
}

function checkPassword(password, successCallback , errorCallback) {
    
            if(/\d/.test(password) && password.length >6){
                return successCallback();
            }else{
                return errorCallback();
            }    
    }

console.log(checkPassword("JSGuru123",successCallback , errorCallback));
console.log(checkPassword("JSGuru",successCallback , errorCallback));

/*7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

function filter(){
    let array = [2, 8, 11, 4, 9, 3];
    return array.filter(function(n){ return n%2 !== 0; });
}
//console.log([2, 8, 11, 4, 9, 3].filter(function(n){ return n%2 !== 0; }));
//console.log(filter());
function filterElements(array, callback) {
    console.log(callback(array));
  }
  filterElements([2, 8, 11, 4, 9, 3], filter);