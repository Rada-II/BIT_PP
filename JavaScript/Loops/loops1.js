/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/
for(let i = 0; i <= 15; i ++){
    if(i % 2 ==0){
        console.log(i,"is even number");
    }else{
        console.log(i,"is odd number");
    }
}

/*2. Write a program to sum the multiples of 3 and 5 under 1000.*/
let sum = 0;
for (let i = 0; i < 1000; i++) {
    
   if(i % 3 == 0 && i % 5 ==0){
    sum += i;
   } 
}
console.log("sum is",sum);

/*3. Write a program that will iterate from 0 to 10 and display squares of numbers.*/

let squareNum = 0;
for (let i = 0; i <= 10; i++) {
    
squareNum = i*i;
   
console.log("Square of the number",i, "is",squareNum);
}
/*4. Write a program to compute the sum and product of an array of integers.*/

let arr = [1, 2, 3, 4, 5, 6];
let sum1 = 0;
let product = 1;

for (let i = 0; i < arr.length; i++) {
   sum1 += arr[i];
   product *=arr[i] 
    
}
console.log("Sum is",sum1,"Product is",product);
/*5. Write a program which prints the elements of the following array as a single string.
let x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];*/
let x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
let string = "";

for (let i = 0; i < x.length; i++) {
    
   string += x[i]; 
}
console.log(string);


/*6. Write a program that prints the elements of the following array.
let a = [
[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];*/

let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];


    for (let i = 0; i < a.length; i++) {                                                   //size of array of array //(whole)
        for (let j = 0; j < a[i].length; j++) {                                            //size of  little array 
            console.log(a[i][j]);        
            
        }
        }

/*7. Write a program that outputs the sum of squares of the first 20 numbers.*/
let sum3 = 0;

for (let i = 0; i <= 20; i++) {
    let square = i*i;
    sum3 +=square;
    
}
console.log(sum3);

/*8. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68
The grades are computed as follows :

< 60% F
< 70% D
< 80% C
< 90% B
< 100% A*/

let students = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];
let Avgmarks = 0;

for (let i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + avg);

        if (avg < 60){
                console.log("Grade is F");      
        } else if (avg < 70) {
                console.log("Grade is D"); 
        } else if (avg < 80) {
                console.log("Grade is C"); 
        } else if (avg < 90) {
                console.log("Grade is B"); 
        } else if (avg < 100) {
                console.log("Grade is A"); 
        }

/*9. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those). */

for (let i = 0; i < 100; i++) {
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
    
}

for (let i = 0; i < 100; i++){ 
   if(i%3==0){                       //ukoliko je deljiv sa 3 
        console.log("Fizz");
    }else if(i%5==0){                // ukoliko je deljiv sa 5
        console.log("Buzz");
    }else if(i%3==0 && i%5==0){
        console.log("FizzBuzz");      // ukoliko je deljiv sa 3 i 5--> uvek je ispunjen iz prethodna dva slucaja ili nije uopste ispunjen
        }else(                        //ukoliko nije nijedan od ovih ifova ispunjen onda ispisi brojeve
    console.log(i));
    
}