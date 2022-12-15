/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/

function checkElement(array, e) {
    let result = "";
    for (let i = 0; i< array.length; i++) {
      if(array[i] === e) {
        result = "yes";
        break;
      }
      result = "no";
    }
  
    return result;
  }
  console.log(checkElement([5, -4.2, 3, 7], 3));
  console.log(checkElement([5, -4.2, 18, 7], 3));
/*2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

function multipliesPositiveElement(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray[i] = array[i] * 2;
    } else {
      newArray[i] = array[i];
    }

  }

  return newArray;
}
console.log(multipliesPositiveElement([-3, 11, 5, 3.4, -8]));
/*3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

function minIndex(array) {
    let result = "";
    let min = array[0];
    let index = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i] < min) {
        index = i;
        min = array[i];
        result = "Minimum number is " + min + " and his index is " + index;
      }
    }
    return result;
  }
  console.log(minIndex([4, 2, 2, -1, 6]));
/*4. Write a program that finds the second smallest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/

function secondToMin(array) {
    let min = array[0];
    let secondMin = array[1];
    let result = "";
    
    for (let i = 2; i < array.length; i++) {
      if (array[i] < min) {
        secondMin = min;
        min = array[i];
      } else if (array[i] < secondMin) {
        secondMin = array[i];        
      }
    }
    return result =`second smallest number is ${secondMin}` ;
  }

  console.log(secondToMin([4, 2, 2, -1, 6]));
/*5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

function sumOfPositive(array) {
    
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        sum += array[i];
        
      }
    }
    return "Sum of positive element in array is " + sum; 
    
  }
  console.log(sumOfPositive([3, 11, -5, -3, 2]));
  
/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.*/

function isSymmetric(array){
let result = ""
for (let i = 0; i< array.length/2; i++){
    if(array[i] === array[array.length - i - 1]){
            result = "The array is symmetric."
            break;
        }else{
            result = "The array isn't symmetric.";
            break;

        }     
 }
 return result;
}
console.log(isSymmetric([2, 4, -2, 7, -2, 4, 2]));
console.log(isSymmetric([3, 4, 12, 8]));  
/*7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

function intertwinesTwoArrays(array1, array2) {
    var newArray = [];
    for (i = 0; i < array1.length; i++) {
      newArray[newArray.length] = array1[i];
      newArray[newArray.length] = array2[i];
    }
    return newArray;
  }
console.log(intertwinesTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));



// let strA = [4, 5, 6, 2],
//     strAA= strA.toString(),
//     strB = [3, 8, 11, 9],
//     strBB= strB.toString();
//     console.log(strBB);
    //zipS = String.raw({raw: strAA},...strBB);
    
//console.log(zipS);

/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

function concatenatesTwoArrays (array1, array2){
    let newArray = array1.concat(array2);
    return newArray;
}
console.log(concatenatesTwoArrays ([4, 5, 6, 2], [4, 5, 6, 2]));


/*9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/
function remove(arrOriginal, elementToRemove){
    return arrOriginal.filter(function(el){return el !== elementToRemove});
}
console.log(remove ([4, 6, 2, 8, 2, 2],2));

function deleteElement(array, num) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== num) {
        newArray[newArray.length] = array[i];
      }
    }
  
    return newArray;
  }
  console.log(deleteElement([4, 6, 2, 8, 2, 2],2));

/*10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

function insertElement(array, position, element) {
    var result = "";
    var newArray = [];
    if (position > array.length) {
      
      return result = "Error message!!";
    } else {
      for (i = 0; i < array.length; i++) {
        if (i === position) {
          newArray[newArray.length] = element;
          newArray[newArray.length] = array[i];
        } else {
          newArray[newArray.length] = array[i];
        }
      }    
    }
  
    return newArray;
  }
  console.log(insertElement([2, -2, 33, 12, 5, 8], 3, 78));
 
  
