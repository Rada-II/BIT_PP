/*1. Write a function named tellFortune that:
* takes 4 arguments: number of children, partner's name, geographic location, job title.
* outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

function tellFortune(children, location, partner, job) {
      
    return `You will be a ${job} in ${location} and married to ${partner} with ${children} kids.`;
}
    
  console.log(tellFortune("2", "Belgrade", "Vuk", "QA"));
  console.log(tellFortune("4", "London", "Steve", "architect"));
  console.log(tellFortune("3", 'NYC', 'Tom', "developer"));

/*2. Write a function named calculateDogAge that:
* takes 1 argument: your puppy's age.
* calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
* outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years.*/

let calculateDogAge = function (yourPuppyAge, yourAge) {
    let dogsAge = yourPuppyAge * 7;
    let humanAge = parseInt(yourAge/7) ;
    let output = `Your doggie is ${dogsAge} years old in dog years, and you are ${humanAge} years old in doggy years!`;
     return output;
}
 console.log(calculateDogAge(7,26));
 console.log(calculateDogAge(5,35));
 console.log(calculateDogAge(7,45));

/*3. Write a function named calculateSupply that:
* takes 2 arguments: age, amount per day.
* calculates the amount consumed for rest of the life (based on a constant max age).
* outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/

function calculateSupply(age, amountPerDay) {
    const maxAge = 70;
    let supply = parseInt((maxAge - age) * 365 * amountPerDay);

    return `You will need ${supply} to last you until the ripe old age of ${maxAge}.`
    
}

console.log(calculateSupply(50, 2.7));
console.log(calculateSupply(30, 4));
console.log(calculateSupply(60, 3.2));

/*4. Create a function called celsiusToFahrenheit:
* Store a celsius temperature into a variable.
* Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
* Now store a fahrenheit temperature into a variable.
* Convert it to celsius and output "NN°F is NN°C."
*NN is actual temperature you need to convert*/

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    
    return `${celsius} °C is ${fahrenheit} °F.`;
   }
    
   
   
   function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    
    return `${fahrenheit} °F is ${celsius} °C.`;
   }
   
   console.log(celsiusToFahrenheit(25));
   console.log(fahrenheitToCelsius(70));

/*5. Create a function that validates a password to conform to the following rules:
* Length between 6 and 24 characters,
* At least one uppercase letter (A-Z).
* At least one lowercase letter (a-z).
* At least one digit (0-9).
* Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
* Supported special characters: ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; " ' ? &lt; &gt; , .
* Examples: validatePassword("P1zz@") ➞ false // Too short.
* validatePassword("iLoveYou") ➞ false // Missing a number.
* validatePassword("Fhg93@") ➞ true // OK!*/

function checkLength(password){
    let passLengthMess = "Password length must be between 6 and 24 characters!";
    if(password.length > 6 && password.length < 24) {   
       return true;
   } else {
       console.log(passLengthMess);
       return false;
   }
}
      //checkLength("papa");

function uppercaseLetter(password){
   let upperCaseMess = 'There is no uppercase letter in your password!';
   for (i=0; i<password.length;i++){
       if (password[i] === password[i].toUpperCase()){
           return true;              
   } else {
       console.log(upperCaseMess);
       return false;
   }
   }
}

// uppercaseLetter('radad');

function lowercaseLetter(password){
   let lowercaseMess = 'There is no lowercase letter in your password!';
      let lowercaseLetter = /[a-z]/;
       
if(lowercaseLetter.test(password)){
    return true;              
        } else {
            console.log(lowercaseMess);
            return false;
        }
        }

        //lowercaseLetter("DDDDDDDg");


       //  function lowercaseLetter(password){
       //     let lowerCaseMess = 'There is no lowercase letter in your password!';
       //     for (i=0; i<password.length;i++){
       //         if (password[i] !== password[i].toUpperCase()){
       //             return true;
       //     }
       // }
       // console.log(lowerCaseMess);
       // return false;
       // }
       //  lowercaseLetter('RHHHHHHg');    //this works
       




// function atLeastOneDigit(password){
//     const digits = [0,1,2,3,4,5,6,7,8,9];
//     const atLeastOneDigitMess = 'There is no digits in your password!';
//     for(let i = 0; i < digits.length; i++){
//         if(password.includes(digits[i])){
//             return true;
//         }
//     }
//     console.log(atLeastOneDigitMess );
//     return false;
// }
// atLeastOneDigit("ssh");  ///this works


function atLeastOneDigit(password){
let digitMess = 'There is no digits in your password!';
 let atLeastOneDigit = /\d/;
  
if(atLeastOneDigit.test(password)){
return true;              
   } else {
       console.log(digitMess);
       return false;
   }
   }

//         atLeastOneDigit('Radar1');

function maxRepetition(password){
let maxRepetitionMess = "Password mustn't contain 3 repeated characters!";
for(i=0;i<password.length;i++){
   if(password[i]===password[i+1] && password[i]===password[i+2]){
       console.log(maxRepetitionMess);
       return false;
   }else{
       return true; 
   }
}
}
// maxRepetition("rrrAda1")

function specialCharacters(password){
let specialCharactersMess = 'There is no special characters in your password!';
const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
   
if(specialChars.test(password)){
return true;              
    } else {
        console.log(specialCharactersMess);
        return false;
    }
    }

     //specialCharacters('Radar1');

function validatePassword(password) {
let checkLengthOfPassword = checkLength(password);
let checkUppercaseLetterPassword = uppercaseLetter(password);
let checkLowercaseLetterPassword = lowercaseLetter(password);
let checkAtLeastOneDigitPassword = atLeastOneDigit(password);
let checkMaxRepetitionPassword = maxRepetition(password);
let checkSpecialCharactersPassword = specialCharacters(password);
let successfulPassword = "Your password is valid!";
let unsuccessfulPassword = "Your password is not valid!";

if(checkLengthOfPassword && checkUppercaseLetterPassword  && checkLowercaseLetterPassword 
&& checkAtLeastOneDigitPassword && checkMaxRepetitionPassword && checkSpecialCharactersPassword) { 
  return successfulPassword;
} 
return unsuccessfulPassword;
}

console.log(validatePassword("Password1TTt$"));

/*6. Create a function that finds how many prime numbers there are, up to the given integer.
Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29*/

function isPrime(primeNumber) {
    let result = true;

    for(let i = 2; i <= primeNumber; i++) {
        if(primeNumber % i == 0 && primeNumber != i) {
            result = false;
            break;            
        } 
    }

    return result;
}

//console.log(isPrime(12));

function primeNumbers(inputNumber) {
    let counter = 0;
    let resultArray=[];

       for(let i = 2; i < inputNumber; i++) {
        let isPrime1 = isPrime(i);
    
        if(isPrime1 == true) {
            counter = counter + 1;
            resultArray.push(i);            
        }
    }

     return `There are ${counter} prime numbers up to the given integer, and those numbers are ${resultArray}.`;
}
    //return [counter, resultArray];
    console.log(primeNumbers(20));
    console.log(primeNumbers(30));


/*7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
reduces back to 1. Items in the arrays will be the same as the length of the arrays.

Examples:
diamondArrays(1) ➞ [1],
diamondArrays(2) ➞ [1, 2, 2, 1]
diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1] */

function diamondsArray(input){
    let diamondArray = [];
    
    for (i=1; i<=input*2-1; i++)
    if (i<=input)
    for(j=0; j<i; j++)
    diamondArray.push(i);
     else
     for (j=0; j <2*input-i; j++)
     diamondArray.push(2 * input-i);
     
     
     return diamondArray;
   }
   console.log(diamondsArray(5));
   console.log(diamondsArray(2));
   console.log(diamondsArray(1));
 
 
   function diamondsArray1(input){
    let diamondArray = [];
    let diamondArrays=[];
    
   for (i=1; i<=input*2-1; i++){
    diamondArray = [];
    if (i<=input)
     for(j=0; j<i; j++)
      diamondArray.push(i);
    else
     for (j=0; j <2*input-i; j++)
      diamondArray.push(2 * input-i);
      diamondArrays.push(diamondArray);
   
   }
   return diamondArrays;
   }
   console.log(JSON.stringify(diamondsArray1(5)));
 
/*1.Create a function that returns the sum of missing numbers.
Examples: sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29  // 2 + 4 + 6 + 8 + 9
sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575*/

const sumMissingNumbers = (arr) => {
    let a = (arr.sort(function(a, b){return (a - b);}));
    let b = [];
    let c = 0;
    let d = 0;
    for (let i = 0; i < a.length; i++) {
      b.push(parseInt(a[i]));
    }
    
    for(let i = 0; i < b.length - 1; i++) {
      if (b[i] !== (b[i + 1] - 1)) {
        c = b[i + 1] - b[i] - 1;
        for(let j = 0; j < c; j++){
                   d += b[i] + j + 1;
          
        }
      }
    }
    return d;
  } 
  
  console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]));
  console.log(sumMissingNumbers([10, 7, 5, 3, 1]));
  console.log(sumMissingNumbers([1, 3, 5, 7, 10]));

/*2.Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise. Arrays do not have to be sorted (see example #2). Arrays should concatenate to create the final array exactly (examples #3 and #4).
Examples: canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]) ➞ true
canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]) ➞ true
canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Duplicate 7s not found in target array.
canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]) ➞ false // Missing 6 from target array. */
 
function testConcatenationArrays(arrays, arrays2) {
    var arrays1 = [].concat.apply([], arrays);
    arrays1.sort();
    var tempArray2 = arrays2.sort();

    //console.log(arrays1);
    if (arrays1.length !== arrays2.length) return false;
    for (var i = 0, len = arrays1.length; i < len; i++) {
        if (arrays1[i] !== arrays2[i]) {
            return false;
        }
    }
    return true;
}
console.log(testConcatenationArrays([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]));
console.log(testConcatenationArrays([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]));
console.log(testConcatenationArrays([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]));
console.log(testConcatenationArrays([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]));
   
   
  