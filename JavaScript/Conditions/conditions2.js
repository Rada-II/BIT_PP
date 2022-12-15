/*1. Check if a triangle is equilateral, scalene or isosceles, and print which triangle is yours.. 
Example: sides of triangle are 3, 4, 5. This is scalene triangle.*/

let side1 = 3;
let side2 = 4;
let side3 = 5;

if(side1==side2 && side2==side3 && side1==side3){
    console.log("This is equilateral triangle");
}else if(side1==side2 || side2==side3 || side1==side3){
    console.log("This is isosceles triangle");
}else{
    console.log("This is scalene triangle");
}


/*2. Perform arithmetic operations on two numbers. Operations are add, subtract, multiply, divide,
modulus.*/

let num1 = 1;
let num2 = 3;
let adding = "+";
let multiplying = "*";
let subtracting = "-";
let dividing = "/";
let modulus = "%";

if(adding =="+"){
    console.log("Adding these numbers gives us", num1+num2);
}if(subtracting =="-"){
    console.log("Subtracting these numbers gives us", num1-num2);
}if(multiplying =="*"){
    console.log("Multiplying these numbers gives us", num1*num2);
}if(dividing =="/"){
    console.log("Dividing these numbers gives us", num1/num2);
}if(modulus =="%"){
    console.log("Modulus these numbers gives us", num1%num2);
}            


/*3. Find the grade for input marks (you should have at least two input marks). Grades are:
A (91-100), B (81-90), C (71-80), D (61-70), E (51-60). Optionally print if student has failed the exam.*/

let grade1 = 79;
let grade2 = 99;

if(grade1>91 && grade1<=100){
    console.log("grade is A");
}else if(grade1>81 && grade1<=90){
    console.log("grade is B");
}else if(grade1>71 && grade1<=80){
    console.log("grade is C");
}else if(grade1>61 && grade1<=70){
    console.log("grade is D");
}else if(grade1>51 && grade1<=60){
    console.log("grade is E");
}else{console.log("student has failed the exam");
}    
 
if(grade2>91 && grade2<=100){
    console.log("grade is A");
}else if(grade2>81 && grade2<=90){
    console.log("grade is B");
}else if(grade2>71 && grade2<=80){
    console.log("grade is C");
}else if(grade2>61 && grade2<=70){
    console.log("grade is D");
}else if(grade2>51 && grade2<=60){
    console.log("grade is E");
}else{console.log("student has failed the exam");
}    

/*4. Create two variables (or if you know how to do it - input fields). One should be a number, other
should be a noun. Print on screen the number and pluralized form, like “5 cats” or “1 dog”. Bonus: Make
it handle a few collective nouns like “sheep” and “geese”.*/

let number = 0;
let noun = "cat";
let noun2 = "sheep";
let noun3 = "geese";

if(number==1){
    console.log(`I have one ${noun}!`);
}else if(number>1){
    console.log(`I like all dogs and ${noun}s!`);
}else{
    console.log("I don't like " + noun2 + "s" + "!") //(`I don't like ${noun2}s and ${noun3}s!`);
}


/*5. Write a program to show you age based on entered number (if you know how to create input field, if
not create variable and give it a value). If your age is 18 or older - print “You are old enough to drive”,
but if not than print how many years you need to turn 18. If your age is greater than 18 - try one
example with 13.*/

let age = 12;
if (age>18){
    console.log("You are old enough to drive");
}else {
    console.log(`You need`,18-age,`more years before you are able to drive!`);
    //console.log("You need", 18 - age + " more years to turn 18!");
}
/*6. This one will continue on task 5. Create one more variable (or input field) and compare it with your
age. Show how much is that older/younger than you with text for example “He/She is 13 years
older/younger than me”. If you are the same age - print that you are the same age.*/

let someAge = 53;
let myAge = 37;

if(someAge>myAge){
    console.log("You are older than me",someAge-myAge +" years!");
}else if(myAge>someAge){
    console.log("You are younger than me",myAge-someAge +" years!");
}else{
    console.log("We are same age!");
}


/*7. Create 5 variables (or input fields) with canine species. Create one more variable with canine and
compare it with first 5 species. If it is match - write that on screen. Example: “This is German Shepherd
called Neo”. If there is no match - write on screen that this is a mixed breed. */

let canine1 = "beagle";
let canine2 = "boxer";
let canine3 = "samoyed";
let canine4 = "poodle";
let canine5 = "pug";
let canine6 = "beagle"//or any of these or empty

if(canine1 == canine6){
    console.log("This is beagle");
}else if(canine2 == canine6){
    console.log("This is boxer");
}else if(canine3 == canine6){
    console.log("This is samoyed");
}else if(canine4 == canine6){
    console.log("This is poodle");
}else if(canine5 == canine6){
    console.log("This is pug");
}else {
    console.log("this is mixed breed");
}
