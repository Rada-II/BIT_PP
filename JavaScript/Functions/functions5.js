/*1. Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/
function switchPlaces(arr){


      let newArray = [];

      let min = arr[0];
      let max = arr[0];
      let minI = 0;
      let maxI = 0;

      for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
          minI = i;
        }
        if (max < arr[i]) {
          max = arr[i];
          maxI = i;
        }
      }

      for (let j = 0; j < arr.length; j++) {
        if (j === minI) {
          newArray[j] = max;
        } else if (j === maxI) {
          newArray[j] = min;
        } else {
          newArray[j] = arr[j];
        }
      }  

      return newArray;
    }
  let array = [3, 500, 12, 149, 53, 414, 1, 19]; 
  let func = switchPlaces(array);
  console.log(func);


/*2. Use the following array to make a new one by dividing its values by two and adding 5. If
a given element's value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 0, 53, 414, 1, 19, ]
Output: [ 6.5, 255, 20, 79.5, 0, 31.5, 212, 5.5, 14.5,  ]*/

function dividingByTwo (array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] / 2 + 5 === 0) {
          array[i] = 20;
          newArray[i] = array[i];
        } else {
          newArray[i] = array[i] / 2 + 5;
         }
      }
      return newArray;
}
console.log(dividingByTwo ([ 3, 500, -10, 149, 0, 53, 414, 1, 19,]));


/*3. Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display students' names with their corresponding
grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input:
[ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], 
[ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Michael acquired 50 points and failed to complete
the exam.*/

function examResults(students, grades) {
    let result = "";
    for (let i = 0; i < students.length; i++) {
      
      if (grades[i] >= 91 && grades[i] < 100) {
        result += students[i] + " acquired " + grades[i] + " points and earned 10.\n";
      } else if (grades[i] >= 81 && grades[i] < 91) {
        result += students[i] + " acquired " + grades[i]+ " points and earned 9.\n";
      } else if (grades[i] >= 71 && grades[i] < 81) {
        result += students[i] + " acquired " + grades[i] + " points and earned 8.\n";
      } else if (grades[i] >= 61 && grades[i] < 71) {
        result += students[i] + " acquired " + grades[i] + " points and earned 7.\n";
      } else if (grades[i] >= 51 && grades[i] < 61) {
        result += students[i] + " acquired " + grades[i] + " points and earned 6.\n";
      } else {
        result += students[i] + " acquired " + grades[i] + " and failed to complete the exam.\n";
      }
    }
  
    return result;
  }
  console.log(examResults([ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]));
  //console.log(examResults(students, grades));
/*4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]*/
function multiplyBy(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray[i] = arr[i] * 2;
    }
    newArray = (newArray.sort(function (a, b) {return a - b})
    )
    return newArray
  }
  console.log(multiplyBy([13, 11, 15, 5, 6, 1, 8, 12])); 

/*5. (skip :))Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]*/
function multiplyBy2(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
     
    newArray = arr.sort(function (a, b) {return b - a});       //newArray.push(sort[i])
    }
    return newArray                                      
  }
  console.log(multiplyBy2([13, 11, 15, 5, 6, 1, 8, 12])); 

/*6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000*/

function sumOdd (number1, number2){
    let sum = 0;

    for (let i = 1; i <= number1; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    for (let j = 1; j <= number2; j++) {
      if (j % 2 !== 0) {
        sum -= j;//sum=sum-j
      }
    }

    return sum * 12.5;
}
console.log(sumOdd (1000, 500));
/*7. Define a 10 element array. Take the first two letters from every string (that has at least 2
letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa*/

function letterString(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
      if(typeof array[i] === "string" && array[i].length >= 2 ) {
        result += array[i][0] + array[i][1]; //result+=a[i].slice(0, 2)
      }
    }
  
    return result;
  }
 
  console.log(letterString([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));

/*8. Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB*/
function reverse(s){
    return s.split("").reverse().join("");
}
let result = (reverse("Belgrade Institute of Technology"));
console.log(result);

function printReverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    console.log(result);
  }
  printReverse("Belgrade Institute of Technology");

/*9. Write a program that displays all the combinations of two numbers between 1 and 7.
Don't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/
function combinationsTwoNumber(num1, num2) {
    let result = "";
    
    for (let i = num1; i <= num2; i++){
            for (let j = num1; j <= num2; j++){
                if(i !== j){
                result += i + ", " + j + "\n";
            }
        }
    }
    return result;
}

console.log(combinationsTwoNumber(1, 7));
    


/*10. Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false */
function isPrime(num) {
    var prime = ""; //false;
    for(var i = num-1; i>1; i--) {
        if(num % i == 0) {
            prime = false;
            break;
        } else {
            prime = true;
        }
    }
    return prime;
}
console.log(isPrime(17));
console.log(isPrime(15));

/*11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true*/
function reflectivePalindrome (string) {
    var string = string.replaceAll(" ",""); 
    return string === string.split('').reverse().join('');
  };

  console.log (reflectivePalindrome("a nut for a jar of tuna"));

/*12. Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9 */

function greatestDivisor(a,b)
{
    k=1;
   for (let i = 1; i < Math.min(a,b)+1; i++) 
   {
        if(a%i==0 && b%i==0)
        {
            k=i;
        }
    }
return k;
}
console.log(greatestDivisor(192, 42));