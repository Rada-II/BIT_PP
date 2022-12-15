/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/
let e2 = 3;
let a2 = [5, -4.2, 3, 7];
//let output =""

for (let i = 0; i < a2.length; i++) {
    if(e2 === a2[i]){
        console.log("yes");//output = "yes";
        break;
    }else{
        console.log("no");//output = "no";
    }
}

console.log(output);

let e1 = 3;
let a1 = [5, -4.2, 18, 7];
let output1 =""

for (let i = 0; i < a1.length; i++) {
    if(e1 === a1[i]){
        output1 = "yes";
        break;
    }else{
        output1 = "no";
    }
}

console.log(output1);
/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

let arr = [-3, 11, 5, 3.4, -8];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0){
     arr[i] *= 2; //array[i] = array[i] *2
    }
    
}
console.log(arr);

/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/
let array1 = [4, 2, 2, -1, 6];
let min = 0;
let index = 0;

for (let i = 0; i < array1.length; i++) {
  if(min > array1[i]) {
    min = array1[i];
    index = i;
  } 
    
}
console.log("minimum of a given array is", min ,"and index is", index);

/*4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/

let array = [4, 2, 2, -1, 6];
let minimum = array[0];
let secMin = array[0];

for (let i = 0; i < array.length; i++) {
    if (minimum>array[i]) {
      minimum = array[i];
      
    }
  }
for (let j = 0; j < array.length; j++) {
    if (secMin>array[j] && array[j]>minimum) {
      secMin = array[j];
    }
}
console.log("first element larger than minimum:" ,secMin);



/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

let array5 = [3, 11, -5, -3, 2];
sum5 = 0;
for (let i = 0; i < array.length; i++) {
   if(array5[i] > 0) {
    sum5 += array5[i]
   }
    
}

console.log(sum5);

/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

 let array6 = [3, 4, 12, 8];

 for (let i = 0; i< array6.length/2; i++){
    if(array6[i] === array6[array6.length - i - 1]){
            console.log("The array is symmetric.");
            break;
        }else{
            console.log("The array isn't symmetric.");
            break;

        }     
 }  
     
 

/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

let array7 = [4, 5, 6, 2];
let array8 = [3, 8, 11, 9];
let newArray1 = [];

for (let i = 0; i < array7.length; i++) {
           
    newArray1[newArray1.length] = array7[i];
    newArray1[newArray1.length] = array8[i];
    
}
console.log(newArray1);

/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

let array3 = [4, 5, 6, 2];
let array4 = [3, 8, 11, 9];


for (let i = 0; i < array4.length; i++) {
           
    array3[array3.length]= array4[i]
       
}
console.log(array3);


/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2] Output array: [4, 6, 8]*/

let inputArray = [4, 6, 2, 8, 2, 2];
let element = 2;
let outputArray = [];

for ( let i = 0; i < inputArray.length; i++) {

  if (inputArray[i] !== element) {
    outputArray[outputArray.length] = inputArray[i];
  }

}
console.log(outputArray);

/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

let e = 78;
let p = 3;
let a = [2, -2, 33, 12, 5, 8];
let newArray = [];

if (p > a.length) {
  console.log("Error message!!");
} else {

  for (let i = 0; i < a.length; i++) {
    if (i === p) {
      newArray[newArray.length] = e;
      newArray[newArray.length] = a[i];
    } else {
      newArray[newArray.length] = a[i];
    }
  }
  console.log(newArray);
}