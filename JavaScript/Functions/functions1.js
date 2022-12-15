/*1. Write a program that calculates the maximum of two given numbers.*/

let number1 = 7;
let number2 = 8;
let output = "";

function maximumOfNumbers(number1, number2) {

    if (number1 > number2) {
        return output = `maximum is ${number1}`;
    } else if (number2 > number1) {
        return output = `maximum is ${number2}`;
    }

}

console.log(maximumOfNumbers(7, 8));

/*2. Write a program that checks if a given number is odd.*/

function oddNumber(number) {
    if (number % 2 === 0) {
        return "number is even!";
    } else {
        return "number is odd!";
    }


}
console.log(oddNumber(9));
console.log(oddNumber(4));


/*3. Write a program that checks if a given number is a three digit long number.*/

function threeDigitLong(number) {
    if (number > 99 && number < 1000) {
        return "number is a three digit long!";
    } else {
        return "number is not a three digit long!";
    }
}
console.log(threeDigitLong(78));
console.log(threeDigitLong(3456));


/*4. Write a program that calculates an arithmetic mean of four numbers.*/

function arithmeticMean(num1, num2, num3, num4) {
    let arithmeticMean1 = (num1 + num2 + num3 + num4) / 4;
    return arithmeticMean1;
}
console.log(arithmeticMean(1, 3, 4, 8));


/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****             
*   *
*   *
*   *
***** */
function drawsASquare(size) {
    let result = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            //result += '*'
            if (i == 0 || i == size - 1) {
                result += '*'

            } else if (j == 0 || j == size - 1) {
                result += '*'
            } else (result += " ")

        }
        result += "\n"
        //console.log(result);
    }
    return result;
}
console.log(drawsASquare(5));


/*6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * */

function horizontalChart(value1, value2, value3) {
    output = "";
    for (let i = 0; i <= value1; i++) {
        output += "*";
    }
    output += "\n";
    for (let j = 0; j <= value2; j++) {
        output += "*";
    }
    output += "\n";
    for (let k = 0; k <= value3; k++) {
        output += "*";
    }
    return output;
}
console.log(horizontalChart(5, 3, 7));

/*7. Write a program that calculates a number of digits of a given number.*/

function numberDigits(a) {
    let string = "";
    let counter = 0;
    string += "Number is " + a;

    if (a < 0) {
        a *= -1
    }

    while (a >= 1) {
        a /= 10;
        counter++;
    }

    return string += " and has " + counter + " digits";
}

let a = -45878;
console.log(numberDigits(a));

let number = 21112;
function getLength(number) {
    return number.toString().length;
}
let result = getLength(21112);
console.log(`number ${number} has ${result} digit`);

/*8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3*/
function numberOfAppearances (array, number){
    let counter = 0;
    for( i = 0; i < array.length; i++) {
        if( array[i] === number) {
          counter++;
        }
      }
      return counter ;
}
console.log(numberOfAppearances ([2, 4, 7, 8, 7, 7, 1], 7));

/*9. Write a program that calculates the sum of odd elements of a given array.*/
function sumOfOddElements (arr){
    sum = 0;
    for( i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOfOddElements ([2, 4, 7, 8, 7, 7, 1]));
/*10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/

function numberOfAppearancesOfALetter (string){
    let sum1 = 0;
    for (let i = 0; i < string.length; i++) {
     //let a = input[i];
     if (string[i] === "a" || string[i] === "A"){
        sum1++;
     }
   }
 
    return sum1;
}
console.log(numberOfAppearancesOfALetter ("RadaR"));

/*11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc. */

function concatenatesString (string, number){
    let sum11 = "";
    for (i = 0; i < number; i++) {
        sum11 += string;
      }
      return sum11;
    }
    
    console.log(concatenatesString ("abc", 4))
 
