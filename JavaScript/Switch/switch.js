/*1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.*/

let day = 1;
let result = "";

switch (day) {
  case 1:
    result = "Monday";
    break;
  case 2:
    result = "Tuesday";
    break;
  case 3:
    result = "Wednesday";
    break;
  case 4:
    result = "Thursday";
    break;
  case 5:
    result = "Friday";
    break;
  case 6:
    result = "Saturday";
    break;
  case 7:
    result = "Sunday";
    break;
    default:
    result = "Nothing"
    break;
}

console.log(result);

/*2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”.*/

let input = 7;
let output = "";

    switch (input) {
        case 1:
          output = "Monday";
          break;
        case 2:
          output = "Tuesday";
          break;
        case 3:
          output = "Wednesday";
          break;
        case 4:
          output = "Thursday";
          break;
        case 5:
          output = "Friday";
          break;
        case 6:
          output = "Saturday";
          break;
        case 7:
          output = "Sunday";
          break;
          default:
          output = "Input must be a number between 1 and 7";
          break;
      } 

console.log(output);

/*3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.*/

let inputNum = 10;


    switch (inputNum) {
        case 1:
            console.log("It's weekday");
          break;
        case 2:
          console.log("It's weekday");
          break;
        case 3:
          console.log("It's weekday");
          break;
        case 4:
            console.log("It's weekday");
          break;
        case 5:
         console.log("It's weekday");
          break;
        case 6:
            console.log("It's weekend");
          break;
        case 7:
            console.log("It's weekend");
          break;
          default:
            console.log("Input must be a number between 1 and 7");
          break;
      } 

/*4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.*/

let month = 10;
let result1 = "";

switch (month) {
    case 1:
        result1 = "January";
        break;
    case 2:
        result1 = "February";
        break;
    case 3:
        result1 = "March";
        break;
    case 4:
        result = "April";
        break;
    case 5:
        result1 = "May";
        break;
    case 6:
        result1 = "June";
        break;
    case 7:
        result = "July";
        break;
    case 8:
        result1 = "August";
        break;
    case 9:
        result = "September";
        break;
    case 10:
        result1 = "October";
        break;
    case 11:
        result1 = "November";
        break;
    case 12:
        result1 = "December";
        break;
    default:
        result1 = "Input must be a number between 1 and 12";
        break;
}

console.log(result1);

/*5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.*/

let inputMonth = 10;

switch (inputMonth) {
    case 1:
        console.log("it's winter");
        break;
    case 2:
        console.log("it's winter");
        break;
    case 3:
        console.log("it's spring");
        break;
    case 4:
        console.log("it's spring");
        break;
    case 5:
        console.log("it's spring");
        break;
    case 6:
        console.log("it's summer");
        break;
    case 7:
        console.log("it's summer");
        break;
    case 8:
        console.log("it's summer");
        break;
    case 9:
        console.log("it's autumn");
        break;
    case 10:
        console.log("it's autumn");
        break;
    case 11:
        console.log("it's autumn");
        break;
    case 12:
        console.log("it's winter");
        break;
    default:
        result1 = "Input must be a number between 1 and 12";
        break;
}

/*6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - "Good job", B - "Pretty good", C -
"Passed", D - "Not so good", F - "Failed". Input different from letters A-F outputs a message
"Unknown grade".*/

let grade = "A";


    switch (grade) {
        case "A":
            console.log("Good job");
          break;
        case "B":
          console.log("Pretty good");
          break;
        case "C":
          console.log("Passed");
          break;
        case "D":
            console.log("Not so good");
          break;
        case "F":
         console.log("Failed");
          break;
          default:
            console.log("Unknown grade");
          break;
      } 



/*7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message"Please
choose a different city".*/

let city = "Belgrade";

switch (city) {
    case "Belgrade":
        console.log("country is Serbia");
        break;
    case "Nis":
        console.log("country is Serbia");
        break;
    case "Novi Sad":
        console.log("country is Serbia");
        break;
    case "Sid":
        console.log("country is Serbia");
        break;
    case "Sabac":
        console.log("country is Serbia");
        break;
    case "Berlin":
        console.log("country is Germany");
        break;
    case "Minhen":
        console.log("country is Germany");
        break;
    case "Frankfurt":
        console.log("country is Germany");
        break;
    case "NYC":
        console.log("country is USA");
        break;
    case "LA":
        console.log("country is USA");
        break;
    case "Chicago":
        console.log("country is USA");
        break;
    case "Rome":
        console.log("country is Italy");
        break;
        case "Milan":
        console.log("country is Italy");
        break;
        case "Florence":
        console.log("country is Italy");
        break;
        case "Palermo":
        console.log("country is Italy");
        break;
        default:
        result1 = "Please choose a different city";
        break;
}

/*8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */

let number1 = 7;
let number2 = 0;
let operation = "/";

if(number1 == 0 || number2 == 0 && operation =="/"){
    output = "we don't divide numbers with 0";
}else{switch (operation) {
    case "+":
      output = number1 + number2;
      break;
    case "-":
      output = number1 - number2;
      break;
    case "*":
      output = number1 * number2;
      break;
    case "/":
      output = number1 / number2;
      break;
      default:
      output = "error";
      break;
    } 
  }
 
  console.log(output);

  var num1 = 1;
  var num2 = 0;
  var operation1 = '/';
  var result2 = '';
  
  switch (operation1) {
    case '+':
      result2 = num1 + num2;
      break;
  
    case '-':
      result2 = num1 - num2;
      break;
  
    case '*':
      result2 = num1 * num2;
      break;
  
    case '/':
      if (num2 === 0) {
        result2 = 'Division with 0 not valid.';
      } else {
        result1 = num1 / num2;
      }
      break;
  
    default:
      result2 = 'Operation not valid.';
      break;
  }
  
  console.log(result2);