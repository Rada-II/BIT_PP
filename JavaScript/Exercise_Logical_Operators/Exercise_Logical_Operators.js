/*2. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/
 let age = 35;
 if (age<0){
    console.log("This age has negative value");
 }
 else if (age>120){
    console.log("This age is greater than 120");
 }else console.log("This is correct age");
 


/*3. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per
hour. If we store the current speed value in the variable speed. Write an expression
which will check if we are driving drive safely or not? (true if we are driving safe and
false if not) */

let currentSpeed = 80;

if(currentSpeed>60 && currentSpeed<120)
console.log("You are driving safe");
else console.log("You are not driving safe");