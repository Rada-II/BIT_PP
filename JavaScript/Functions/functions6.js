/*1. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

function rotate(array, k) {
    for (let i = 0; i < k; i++) {
        array.push(array.shift());
    }
    return array;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 2));

/*2. Write a function that takes a number and returns array of its digits.*/
function numberToArray(number) {
    result = number.toString().split('')
    return result
}
console.log(numberToArray(456789));
/*3. Write a program that prints a multiplication table for numbers up to 12.*/
function multiplicationTable(number) {
    let result = "";

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= number; j++) {

            result += `${i} x ${j} = ${(i * j)}` + "\n";
        }
    }
    return result;
}
console.log(multiplicationTable(12));

/*4. Write a function to find the maximum element in array of numbers. Filter out all non-number
elements.*/
function onlyNumbers(array) {
    result = [];
    //y = 0;
    for (i = 0; i < array.length; i++)
        if (typeof (array[i]) === 'number' && !isNaN(array[i])) {

            result.push(array[i]);
            //result += array[i];
            //result[y] = array[i];
            //y++                                  
        }
    return result;
}
console.log(onlyNumbers([NaN, 0, 15, false, -22, '', undefined, 47, "2323", null, 75, 63, 101]));
let validNumbers = onlyNumbers([NaN, 0, 15, false, -22, '', undefined, 47, "2323", null, 75, 63, 101]);

function maxEl(array) {
    let result = "";
    let max = array[0];
    //let index = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            //index = i;
            max = array[i];
        }
    }
    return `Maximum number is ${max}`    //"Maximum number is " + max 

}
//let array = [NaN, 0, 15, false, -22, '', undefined, 47, null, 75, 63 , 101];
let func = maxEl(validNumbers);
console.log(func);


/*5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.*/

function minMax(array) {
    'use strict'
    let min = array[0];                                 //let max = Math.max(...newArr);
    let max = array[0];                                 //let min = Math.min(...newArr);     
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }

        if (array[i] > max) {
            max = array[i];
        }
    }
    newArray[0] = min;
    newArray[1] = max;
    return newArray;
}

console.log(minMax([1, 15, 21, 3, 84, 32, 4, 5]));

/*6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).*/

function median(array) {

    array.sort(function (a, b) { return a - b; });
    let half = Math.floor(array.length / 2);
    let rest = array.length % 2;
    if (rest)
        return array[half];
    else
        return (array[half - 1] + array[half]) / 2.0;
}

console.log(median([1, 2, 3, 4, 5]));


/*7. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.*/

function elementsOfArray(arr) {
    'use strict'
    let newArray = [];
    if (arr.length < 1) {
        newArray = arr; //return arr;
    }
    else if (arr.length % 2 === 0) {
        newArray[0] = arr[0];
        newArray[1] = arr[arr.length - 1];
    }
    else if (arr.length % 2 !== 0) {
        newArray[0] = arr[0];
        newArray[1] = arr[Math.floor(arr.length / 2)];
        newArray[2] = arr[arr.length - 1];
    }

    return newArray;

}
console.log(elementsOfArray([1, 2, 3, 4, 5]));

/*8. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters.*/

function averageEl() {
    'use strict'
    let sum = 0;
    let avg;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    avg = sum / arguments.length;
    return avg;
}

console.log(averageEl(12, 15, 18, 120, -25, 3, 63));

/*9. Write a function to find all the numbers greater than the average.*/

function greaterThanAverage(arr) {
    var sum = 0;
    var avg;
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    avg = sum / arr.length;

    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > avg) {
            
            result.push(arr[j]);                           //result[result.length] = arr[j];
        }
    }

    return result;
}
console.log(greaterThanAverage([1,2,3,4,5]));

/*10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
* Starvation: less than 15
* Anorexic: less than 17.5
* Underweight: less than 18.5
* Ideal: greater than or equal to 18.5 but less than 25
* Overweight: greater than or equal to 25 but less than 30
* Obese: greater than or equal to 30 but less than 40
* Morbidly obese: greater than or equal to 40*/

function BMI(weight, height) {
    var BMI;
    var result = "";

    BMI = weight / (height * height);

    if( BMI < 15){
        result = "Starvation";
    } else if (BMI >= 15 && BMI < 17.5){
        result = "Anorexic";
    } else if (BMI >= 17.5 && BMI < 18.5){
        result = "Underweight";
    } else if (BMI >= 18.5 && BMI < 25){
        result = "Ideal";
    } else if (BMI >= 25 && BMI < 30){
        result = "Overweight";
    } else if (BMI >= 30 && BMI < 40){
        result = "Obese";
    } else if (BMI >= 40){
        result = "Morbidly obese";
    }

    return result;
    
}
console.log(BMI(70, 1.78));

/*11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list ["Hello", "World", "in", "a", "frame"] gets
printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
********* */
function maxLengthOfWordArray(array){
    let max = array[0];
for (i = 1; i < array.length; i++){
  if(max.length < array[i].length){
    max = array[i];
  }
}
return max.length

}

function printsWord(array1){
    let max = maxLengthOfWordArray(array1);
    let starsOutput = "";
 
     for (let i = 0; i < array1.length + 2; i++) {                      
         for (let j = 0; j < max + 4; j++) {  
             //starsOutput += "*";
             if(i == 0 || i == array1.length + 2 -1 || j == 0 || j == max + 4 -1){
                 starsOutput += "*";
             }else if(j==1){
                 starsOutput += " ";
             }else if (i!= 0 && i != array1.lenght + 2-1 && j == 2){
                 starsOutput += array1[i-1]
                 j = array1[i -1].length + 1          //index kolone
             }else{
                 starsOutput += " ";
             }
           
         }
         starsOutput +="\n";
     }
 return starsOutput
 }
 console.log(printsWord(["Hello", "World", "in", "a", "frame"]));