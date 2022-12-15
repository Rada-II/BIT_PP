// function splitArray(arr, n) {
//     var arr1 = arr.slice(0, n);
//     var arr2 = arr.slice(n, arr.length);
//     //return "[" + "[" +  arr1.join(", ") + "]" + ", " + "[" + arr2.join(", ") + "]" + "]";
//     var result = [];
//     result.push(arr1);
//     result.push(arr2);
//     return result;
// }
// //console.log(splitArray[2, 3, 4, 5, 6], 3);
// function splitArray(arr, n) {
//     var arr1 = arr.slice(0, n);
//     var arr2 = arr.slice(n, arr.length);
//     var result = [];
//     result.push(arr1);
//     result.push(arr2);
//     return result;
// }

// var res = splitArray([2, 3, 4, 5, 6], 3);
// console.log(JSON.stringify(res));

// // function dispalayArray(arr){


// //         console.log(arr[0]);

// // }
// // dispalayArray(res)

// /*8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5], N=2) -> [[2, 3], [4, 5]]
// Primer 2: ([2, 3, 4, 5, 6], N=3) -> [[2, 3, 4], [5, 6]] */

// function createSubarrays(array, n) {
//     result = [];
//     //result[0] = array.slice(0,n);result[x]=slice(x*n,(x+1)*n)
//     //result [1] = array.slice(n,n+n);1*n,2*n//
//     //result[2]= array.slice(n+n,n+n+n)//2*n,3*
//     for (let i = 0; i < array.length / n; i++) {
//         result[i] = array.slice(i * n, (i + 1) * n)

//     }
//     return result;
// }
// //console.log(createSubarrays([1,2,3,4],2)); 


// function printMatrix(array) {
//     result = ""
//     result1 = ""
//     for (let i = 0; i < array.length; i++) {
//         result += "[" + array[i] + "],"
//     }
//     result = result.slice(0, -1)
//     result1 += "[" + result + "]"

//     console.log(result1);
// }

// let a = createSubarrays([2, 3, 4, 5, 6], 3)
// printMatrix(a)

// function podelaNiza(array, lenghtOfSubarray) {
//     let subarray = [];
//     let residueFromArr = [];
//     let h = 0;
//     for (let i = 0; i < lenghtOfSubarray; i++) {
//         subarray[i] = array[i];
//     }
//     for (let j = lenghtOfSubarray; j < array.length; j++) {
//         residueFromArr[h] = array[j];
//         h++;
//     }
//     return '[[' + subarray.toString() + '], [' + residueFromArr.toString() + ']]';
// }
// console.log(podelaNiza([2, 3, 4, 5], 2));




// let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == letter) {
//             count += 1;
//         }
//     }
//     return count;

// function sortArr(arr) {
//     function countt(str) {
//         let count = 0;
//         for (let i = 0; i < str.length; i++) {
//             if (str.charAt(i) == "a" || str.charAt(i) == "A") {
//                 count += 1;
//             }
//         }
//         return count;
  // }
    // return arr.sort(function(a, b){
    //     console.log(a + "" + b);
    //     return
    //     var a_a = a.countt(a);
    //     var b_a = b.countt(b);
    // return a_a - b_a;});
    //     }
    // var array_strings = ["apple","tea","amazing","morning","JavaScript"];
//     return arr.sort(function (a, b) {
//         var a_length = a.split('a').length;
//         var b_length = b.split('a').length;
//         return a_length - b_length;
//     });
//     return array_strings;
// }
// console.log(sortArr(["apple", "tea", "amazing", "morning", "JavaScript"]));


// function countString(amazing, letter) {

//     // creating regex 
//     const re = new RegExp(letter, 'a-A');

//     // matching the pattern
//     const count = str.match(re).length;

//     return count;
// }


// function count (arr){
// var counter1 = 0;
// var counter2 = 0;
// var counter3 = 0;
// var counter4 = 0;
// var counter5 = 0;
// //let arr = ['apple', 'tea', 'amazing', 'morning', 'JavaScript']
// for (let i = 0; i < arr[0]; i++) {
//     if (arr[i] == "A" || arr[i] == "a")
//         counter1++
//     for (let j = 0; j < arr[1]; j++) {
//         if (arr[j] == "A" || arr[j] == "a")
//             counter2++

//         for (let k = 0; k < arr[2]; k++) {
//             if (arr[k] == "A" || arr[k] == "a")
//                 counter3++
//             for (let l = 0; l < arr[3]; l++) {
//                 if (arr[l] == "A" || arr[l] == "a")
//                     counter4++
//                 for (let m = 0; m < arr[4]; m++) {
//                     if (arr[m] == "A" || arr[m] == "a")
//                         counter5++
//                     }
//                 }
//             }
//         }
//     }
//     return counter1,counter2,counter3,counter4,counter5
// }

// console.log(count(['apple', 'tea', 'amazing', 'morning', 'JavaScript']));

//function canGiveBlood (receiver, donor ){
    //     let isreceiverA = receiver.includes("A");
    //     let isreceiverB = receiver.includes("B");
    //     let isreceiverRh = receiver.includes("+");
    //     let isreceiverO = receiver.includes("O");
    //     let isdonorA = donor.includes("A");
    //     let isdonorB = donor.includes("B");
    //     let isdonorRh = donor.includes("+");
    //     let isdonorO = donor.includes("O");
    
    //     if(isreceiverA)
    
    
    // }


//     function sort_by_string_length(arra) {
//         for (let i = 0; i < arra.length; i++) {
//             for (let j = 0 ; j < arra[i].length; j++) {
//                 if(arra[i]="a"){

//                 };
//             }
//         }
//         return arra;
//     }

// console.log(sort_by_string_length(['apple', 'tea', 'amazing', 'morning', 'JavaScript']));