/*Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is - */

let number1 = 3;
let number2 = -7;
let number3 = 2;

if(number1 * number2 * number3 < 0){
    
    console.log("The sign is -");
}else{

    console.log("The sign is +");
}



/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0 */

let num1 = -5;
let num2 = -2;
let num3 = -6;
let num4 = 0;
let num5 = -1;

if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
    console.log(`The largest number is ${num1}`);
}else if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
    console.log(`The largest number is ${num2}`);
}else if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
    console.log(`The largest number is ${num3}`);
}else if(num4>num1 && num4>num2 && num4>num3 && num4>num5){
    console.log(`The largest number is ${num4}`);
}else if(num5>num1 && num5>num2 && num5>num3 && num5>num4){
    console.log(`The largest number is ${num5}`);
}



/*Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1 */

let no1 = 0;
let no2 = -1;
let no3 = 4;

if (no1>no2 && no1>no3 && no2>no3) {
    console.log(no1,no2,no3);
}else if(no2>no1 && no2>no3 && no1<no3){
    console.log(no2,no1,no3);
}else if(no2>no1 && no2>no3 && no3>no1){
    console.log(no2,no3,no1);
}else if(no3>no1 && no3>no2 && no2>no1){
    console.log(no3,no2,no1);
}else if(no3>no1 && no3>no2 && no1>no2){
    console.log(no3,no1,no2)
}

/*Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X*/

let checkNumber = 10;

if (typeof checkNumber == "number" && checkNumber % 2 == 0){
    console.log(`${checkNumber} / 2 = `,checkNumber/2);
}else{
    console.log("x");
}

let checkNumber1 = 7;

if (typeof checkNumber1 == "number" && checkNumber1 % 2 == 0){
    console.log(`${checkNumber1} / 2 = `,checkNumber1/2);
}else{
    console.log("x");
}

/*Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.*/

let digit1 = 5;
let digit2 = 7;

if (digit1>digit2){
    console.log(`${digit1} is greater than ${digit2}`);
}else{
    console.log(`${digit2} is greater than ${digit1}`);
}

/*Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F*/

let C = 60;
let F = (9*C/5) + 32;
console.log(`${C}\xB0C is ${F}\xB0F`);

/*Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38*/

let input = 11;

if(input<13){
    console.log(13 - `${input}`);
}else if(input >13){
    console.log(2*(`${input}`-13));
}

let input1 = 32;

if(input1<13){
    console.log(`${input1}`- 13);
}else if(input1 >13){
    console.log(2*(`${input1}`-13));
}


/*Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48*/

let numInt = 12;
let numInt1 = 5;

if(numInt == numInt1){
    console.log(3*(numInt + numInt1));
}else{
    console.log(numInt + numInt1);
}

let numInt2 = 8;
let numInt3 = 8;

if(numInt2 == numInt3){
    console.log(3*(numInt2 + numInt3));
}else{
    console.log(numInt2 + numInt3);
}


/*Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true */

let dig1 = 5;
let dig2 = 54;

if(dig1==50 || dig2==50 || dig1+dig2==50){
    console.log(true);
}else{
    console.log("-");
}

let dig3 = 6;
let dig4 = 50;

if(dig3==50 || dig4==50 || dig3+dig4==50){
    console.log(true);
}else{
    console.log("-");
}

let dig5 = 40;
let dig6 = 10;

if(dig5==50 || dig6==50 || dig5+dig6==50){
    console.log(true);
}else{
    console.log("-");
}



/*Task 10. Write a JavaScript program to check a given integer is within 20 or 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400 */

let someNum = 13;

if(someNum<20){
    console.log("-");
}else if(someNum>=20 && someNum<=100){
    console.log("20 ⇔ 100");
}else if(someNum>=100 && someNum<=400){
    console.log("100 ⇔ 400");
}

let someNum1 = 34;

if(someNum1<20){
    console.log("-");
}else if(someNum1>=20 && someNum1<=100){
    console.log("20 ⇔ 100");
}else if(someNum1>=100 && someNum1<=400){
    console.log("100 ⇔ 400");
}

let someNum2 = 256;

if(someNum2<20){
    console.log("-");
}else if(someNum2>=20 && someNum2<=100){
    console.log("20 ⇔ 100");
}else if(someNum2>=100 && someNum2<=400){
    console.log("100 ⇔ 400");
}