/*1. Write an array of months in a year. Using console.log display June, October and January
from the array.*/

let months= ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log(months[5]);
console.log(months[9]);
console.log(months[0]);
/*2. Write an arrays of days in a week. Using console.log display Sunday from the array.*/

var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
console.log(dayNames[6]);

/*3. Print all negative elements from the array [2, -4, 5, -2, -11].*/
let arr = [2, -4, 5, -2, -11];
if(arr[0]<0){
    console.log(arr[0]);
}if(arr[1]<0){
    console.log(arr[1]);
}if(arr[2]<0){
    console.log(arr[2]);
}if(arr[3]<0){
    console.log(arr[3]);
}if(arr[4]<0){
    console.log(arr[4]);        
}

/*4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9].*/

let elements = [5, 15, -5, 20, 12, 18, 72, 14, 9];

if(elements[0]%3==0){
    console.log(elements[0]);
}if(elements[1]%3==0){
    console.log(elements[1]);
}if(elements[2]%3==0){
    console.log(elements[2]);
}if(elements[3]%3==0){
    console.log(elements[3]);
}if(elements[4]%3==0){
    console.log(elements[4]);        
}if(elements[5]%3==0){
    console.log(elements[5]);
}if(elements[6]%3==0){
    console.log(elements[6]);
}if(elements[7]%3==0){
    console.log(elements[7]);        
}if(elements[8]%3==0){
    console.log(elements[8]);        
}

/*5. What is the index of number 24 in the following array?
[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Using console.log:
● Display the 3rd element of the array,
● Display the 2nd element of the 3rd element. */

let array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(array[0][3]);
console.log(array[2]);
console.log(array[2][1]);