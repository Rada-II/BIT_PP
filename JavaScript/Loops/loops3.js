
 /*1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.*/

let sum = 0;

for (let i = 1; i <= 10; i++) {

    sum += i;
}
console.log("sum of first 10 natural numbers is", sum);
/*2. Write a code to display the cube of the number up to given an integer and show it on screen.
 Example: 2 up to cube equals 8.*/
let number = 5;

for (let i = 1; i <= number; i++) {

    let cube = i ** 3;
    console.log(`cube of the ${i} is`, cube);
}

/*3. Write a code to calculate the factorial of a given number and show it on screen. 
Example: The Factorial of 5 is 120.*/
let someNumber = 5;
let factorial = 1;

for (let i = 1; i <= someNumber; i++) {

    factorial *= i;
}
console.log(`The Factorial of ${someNumber} is`, factorial);

/*4. Write a code to display the n terms of even natural number and their sum.
Example:
Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".*/
let sumEven = 0;
let term = 5;

for (let i = 2; i <= 2 * term; i += 2) {

    console.log("The even number is", i)

    sumEven += i;
}

console.log('sum of even number is', sumEven);


/*5.Write a code to calculate the sum of digits in a number and show that sum on screen. 
Example: "Sum of digits in number 232 is 7".*/

let number5 = 2354;
let digit = 0;
let sum5=0;
for (let i = 0; number5 != 0; i++ ){
  digit = number5 % 10;
  sum5 += digit;
  number5 = Math.floor(number5 / 10);
}
console.log("Sum of digits in number 2354 is", sum5);


let value = 225;
let sum2 = 0;

while (value) {
  sum2 += value % 10;
  value = Math.floor(value / 10);
}

console.log(`Sum of digits in number 225 is ${sum2}`);
 
/*6. Write a code to count all letters in a word and show that count on screen.
 Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".*/

 let sum1 = 0;
 let input = "Eclip,!542se";
 
 
 for (let i = 0; i < input.length; i++) {
     //let a = input[i];
     if ((input[i] >= 'a' && input[i] <='z')||
        (input[i] >= 'A' && input[i] <='Z')){
        sum1++;
     }
   }
 
 console.log('There are', sum1 ,'letters in this word .');
 
/*7. Write a code to find on which index in array is letter "C" and show that index on screen.
 Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2]. */

let array = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];

for (let i = 0; i < array.length; i++) {
    if (array[i] === "c") {
        console.log("index is", i);
    }
}
