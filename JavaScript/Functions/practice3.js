
function lastOccurrence(string, letter) {
    let position = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            position = i;

        } else {
            position = -1;
        }
    }
    return position;
}

console.log(lastOccurrence("Radana", "a"));


function gg(string, letter) {
    //let string1 = "";
    string = string.indexOf(letter);
    return string;
}
console.log(gg("radana", "a"));

function bb(string) {

    let newArray = [];


    for (let i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            newArray[newArray.length] = null; 
        }
        else {
            newArray[newArray.length] = string[i];//newArray[0]="m"
        }
    }

    return newArray;
}
console.log(bb('my random string'));

// let myFavShow = 'my random string';
// //let newprom = myFavShow.replaceAll(" ","null")
// let myFavShowArray = myFavShow.split('');
// console.log(myFavShowArray);
// let newprom = myFavShowArray.replaceAll(" ","null")
// console.log(newprom) 

// function filter_array(array1) 
// { 
//     array2=[];
//     for (let i = 0; i < array1.length; i++) 
//     {
//     if(!isNaN(array1[i]) && typeof array1[i]!=null &&typeof array1[i]!=Infinity)
//     {
//     array2=array2+array1[i];
//     }
//     array3=array2.toString();
//     }
//     return array3;
// }
// console.log("2. Zadatak: " + filter_array([NaN, 0, 15, false, -22, undefined, 47, null]));


var result = [];

      var min = arr[0];
      var max = arr[0];
      var minI = 0;
      var maxI = 0;

      for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
          minI = i;
        }
        if (max < arr[i]) {
          max = arr[i];
          maxI = i;
        }
      }

      for (var i = 0; i < arr.length; i++) {
        if (i === minI) {
          result[i] = max;
        } else if (i === maxI) {
          result[i] = min;
        } else {
          result[i] = arr[i];
        }
      }

   arr[i],i[1],i[2]
   res[i],i[1],i[2]

   /* 8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
Primer 1: ([2, 3, 4, 5], N=2) -> [[2, 3], [4, 5]]
Primer 2: ([2, 3, 4, 5, 6], N=3) -> [[2, 3, 4], [5, 6]] */


// function splitArr(arr, n) {
    
//    let arr1 = [];
//    let arr2 = [];
  
//     for (let i = 0; i < n; i++) {
//       arr1.push(arr[i]);
//     }
  
//     for (let j = n; j < arr.length; j++) {
//       arr2.push(arr[j]);
//     }
  
//     return[[arr1], [arr2]];
//   }
  
//  console.log(splitArr([2, 3, 4, 5, 6], 2)); 
  
  
 function splitArray(arr, n) {
    let tempArray =[];

    for (let i = 0; i < arr.length/n; i++) {
        tempArray[i]=arr.slice(i*n,(i+1)*n)
    }
    return tempArray

}

const array = [2, 3, 4, 5, 6];
const n = 3;
console.log(splitArray(array, n));
 