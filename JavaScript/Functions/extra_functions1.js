/* 1. Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true
Input: “1bser9re”
Output: false*/

function specialNum(string) {
    const specialNum = /[5]/;
    if (specialNum.test(string)) {
        return true;
    } else {
        return false;
    }
}   //"normal 'named' function"

console.log(specialNum('1b895abd'));
console.log(specialNum('1bserabd'));


(function (string) {

    const specialNum = /[5]/;
    if (specialNum.test(string)) {
        console.log(true);
    } else {
        console.log(false);
    }
})('1b895abd');   //self-invoking anonymous function 


let includesNumber = function (string) {
    const specialNum = /[5]/;
    if (specialNum.test(string)) {
        return true;
    } else {
        return false;
    }
}    // "normal" anonymous function 
console.log(includesNumber('1bserabd'));

    /*2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”*/

function replaceAll (string){
    return string.replaceAll("JS","**");   
}      //"normal 'named' function"
console.log(replaceAll("Programming in JS is super interesting!"));


(function (string) {
    //let string = "Programming in JS is super interesting!";
    console.log(string.replaceAll("JS","**"));
})('Programming in JS is super interesting!'); //self-invoking anonymous function


let replacesAllAppearances = function (string) {
    return string.replaceAll("JS", "**");
}       // "normal" anonymous function 
console.log(replacesAllAppearances("Programming in JS is super interesting!"));

    /*3. Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’ 
Output: “Good morning” */

function insertInString(string, index, character) {
    return string.slice(0, index - 1) + character + string.slice(index - 1);
      
  }         //"normal 'named' function"
  console.log(insertInString("Goo morning", 4, "d"));


  (function (string, index, character){
    console.log(string.slice(0, index - 1) + character + string.slice(index - 1));
  })("Goo morning", 4, "d");   //self-invoking anonymous function 
  

  let insertCharacter = function (string, index, character){
    return string.slice(0, index - 1) + character + string.slice(index - 1);
}     // "normal" anonymous function 
console.log(insertCharacter("Goo morning", 4, "d"));

    /*4. Write a function that deletes a character from the given position in the string. 
Input: “Goodd morning!”, 3 
Output: “Good morning!” */

function deletesCharacter(string,index){
    return string.slice(0,index) + string.slice(index +1)
}         //"normal 'named' function"
console.log(deletesCharacter("Goodd morning",3));


(function (string, index){
   
    console.log(string.slice(0,index) + string.slice(index+1));
  })("Goodd morning",3);  //self-invoking anonymous function 


  let deleteCharacter = function (string,index){
    return string.slice(0,index) + string.slice(index +1)
}    // "normal" anonymous function 
console.log(deleteCharacter("Goodd morning",3));

 
    /*5. Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67] */

function removeEveryOther(arr){
    return arr.filter((a,i) => i%2 == 0);
}          //"normal 'named' function"
console.log(removeEveryOther([3, 5, 1, 8, 90, -4, 23, 1, 67]));


// function removeEveryOther(arr){
//     let newArr = [];
//      for (let i=0; i < arr.length; i+=2){
//         newArr.push(arr[i])     
//      } 
//     return newArr
// }
// console.log(removeEveryOther([3, 5, 1, 8, 90, -4, 23, 1, 67]));


(function(array){
    console.log(array.filter((a,i) => i%2 == 0));
})([3, 5, 1, 8, 90, -4, 23, 1, 67]);      //self-invoking anonymous function 


 let removeEverySecond = function (arr){
    let newArr = [];

     for (let i=0; i < arr.length; i+=2){
        newArr.push(arr[i])     
     } 
    return newArr
}   // "normal" anonymous function 

console.log(removeEverySecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));

