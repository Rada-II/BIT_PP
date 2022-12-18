/*1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]*/

function duplicates(array) {
  let newArray = [];
  array.forEach(function (element) {
    newArray.push(element, element);
  });
  return newArray;
}
console.log(duplicates([2, 4, 7, 11, -2, 1]));

/*2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]*/

function remove(array) {
  return Array.from(new Set(array)).sort((a, b) => a - b);
}
console.log(remove([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

/*3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true*/

function oddEl(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length / 2 !== 0) {
      return true;
    }
  }
}

console.log(oddEl([1, 2, 9, 2, 1]));

/*b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

function middleEl(arr) {
  let result;
  if (arr.length % 2 === 0) {
    return "Array has even number od elements!!";
  } else {
    result = arr.length / 2 + 0.5;
    return result;
  }
}
console.log(middleEl([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }*/

function smallestEl(array) {
  let smallestEl = Math.min(...array);
  let minLastIndex = array.lastIndexOf(smallestEl);
  return { smallestEl, minLastIndex };
}

console.log(smallestEl([1, 4, -2, 11, 8, 1, -2, 3]));

/*5.
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]*/

let arr = [2, 3, 8, -2, 11, 4];
let givenElement = 6;

// (function findAElementLessThanGivenElement(array, givenElement) {
//   // CallBack function for filter function
//   let criteria = function (value, index, array) {
//     return value < givenElement;
//   };

//   let newArr = array.filter(criteria);

//   console.log(newArr);
// })([2, 3, 8, -2, 11, 4], 6);

/*b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]*/

// (function findElementThatStartWithString(array, string) {
//   // Function for filter criteria function
//   let filterCriteria = function (value, index, array) {
//     return (
//       value.startsWith(stringWidthUppercaseFirstLetter) ||
//       value.startsWith(stringWidthLowercaseFirstLetter)
//     );
//   };

//   // Create a strings with uppercase and lowercase first letter
//   let stringWidthUppercaseFirstLetter =
//     string.charAt(0).toUpperCase() + string.slice(1);
//   let stringWidthLowercaseFirstLetter =
//     string.charAt(0).toLowerCase() + string.slice(1);

//   let newArr = array.filter(filterCriteria);

//   console.log(newArr);
// })(["JavaScript", "Programming", "fun", "product"], "Pro");

/*c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.*/

let array = [2, 3, 8, -2, 11, 4];
let value = 6;
let bArray = ["JavaScript", "Programming", "fun", "product"];
let string = "pro";
let arrayC = ["director", "dictator", "doctor", "destructor"];


function given (array, value) {
  let output = array.filter(function(number) {
    return number < value;
  });

  return output;
};

/* b task */
function findStringElement (array, string) {
  let output = [];
  let modArray = array.slice();

  modArray = modArray.map(function (value) {
    return value.toUpperCase();
  });
  for(let i = 0; i < array.length; i++) {
    if(modArray[i].slice(0, string.length) == string.toUpperCase()) {
      output.push(array[i]);
    }
  }

  return output;
};

/* c task */
function filterC (array, value, f) {
  return f(array, value);
}

let outputC = filterC(arrayC, "tor", findStringElement);
let outputCtwo = filterC(array, 4, given);

/* pritn all tasks */
console.log(given(array, value));
console.log(findStringElement(bArray, string));
console.log(outputC);
console.log(outputCtwo);


/*6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]

b. Write a function that calculates the total price of your shopping list.
c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.
d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.*/
let productLists = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
];

function priceob(object) {
  let sum = 0;
  for (let i = 0; i < object.length; i++) {
    sum += object[i].price;
  }
  return sum;
}
console.log(
  priceob([
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 },
  ])
);

function getAveragePrice(params) {
  let sum = 0;

  for (let i in params) {
    sum += params[i].price;
  }

  return (sum / params.length).toFixed(3);
}
console.log(
  getAveragePrice([
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 },
  ])
);

function getMostExpensive(object) {
  let expensive = 0;
  let expensiveName;
  for (let i = 0; i < object.length; i++) {
    if (object[i].price > expensive) {
      expensive = object[i].price;
      expensiveName = object[i].name;
    }
  }
  return expensiveName.toUpperCase()
}
console.log(
  getMostExpensive([
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 },
  ])
);
// function getTotalPrice (params) {
//   let sum = 0;

//   for(let i in params) {
//     sum += params[i].price;
//   }

//   return sum;
// };

/*7.
a. Write a function that checks if a given string is written in all capitals.
b. Write a function that checks if a given string contains any digits.
c. Write a function that checks if a given string is a valid hexadecimal color.
d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.
e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).*/

// a)

let strin = "BANNANAS";

(function checkString(strin) {
  console.log(strin === strin.toUpperCase())
})(strin);


// b)

let str = "Bananas";

// Convert string to array
let arra = [...str];

//Function who check digits in string
(function checkDigitsInString(array) {

  let filterCriteria = function (value, index, array) {
    return parseFloat(value);
  }

  let arrayWidthDigits = array.filter(filterCriteria);

  console.log(arrayWidthDigits.length > 0);

})(array);


// d)

let number = 2015;

(function checkNumber(num) {
  let checkPoint;

  checkPoint = num >= 1900 && num <= 2018;

  console.log(checkPoint);

})(number);


/*8. Write a function that calculates a number of days to your birthday.
Input: 25 February
Output: 5 days*/

function birthday(dateOne, dateTwo) {
  let date1 = new Date("02/20/2022");
  let date2 = new Date("02/25/2022");


  let Difference_In_Time = date2.getTime() - date1.getTime();


  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


  return `Total number of days between dates
               ${date1} 
               ${date2} 
               is ${Difference_In_Days} days!`;
}
console.log(birthday(new Date("02/20/2022"), new Date("02/25/2022")))
/*9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 8:22:13
Output: 3 hours 21 minutes 9 seconds*/

let time1 = "8:22:13";
let time2 = "11:43:22";

function calculateTimeBetweenTime2AndTime1(time1, time2) {
   let time1Elements;
   let time2Elements;
   let differenceBetweenHours;
   let differenceBetweenMinutes;
   let differenceBetweenSeconds;
   let differenceArray = [];
   let hour;
   let minutes;
   let seconds;
   let result;

    // Change string elements to array elements
    time1Elements = time1.split(":");
    time2Elements = time2.split(":");

    // Calculate difference between array elements
    differenceBetweenHours = time2Elements[0] - time1Elements[0];
    differenceBetweenMinutes = time2Elements[1] - time1Elements[1];
    differenceBetweenSeconds = time2Elements[2] - time1Elements[2];

    // Save value in new array
    differenceArray = [differenceBetweenHours, differenceBetweenMinutes, differenceBetweenSeconds];


    hour = parseInt(differenceArray[0]);
    minutes = parseInt(differenceArray[1]);
    seconds = parseInt(differenceArray[2]);

    // Check relation between seconds, minutes and hours
    if (seconds < 0) {
        seconds = 60 + seconds;
        minutes--;
    }
    if (minutes < 0) {
        minutes = 60 + minutes;
        hour--;
    }

    result = hour + ":" + minutes + ":" + seconds;

    console.log(result);
}

calculateTimeBetweenTime2AndTime1(time1, time2);


/*10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
b. Write a function that calculates the distance between two points in the space.*/
function point(posX, posY, posZ) {
  this.x = posX;
  this.y = posY;
  this.z = posZ;
  return{x,y,z}
}
console.log(point(3,5,1));
function calculateDistance(distance1, distance2) {
  let a = distance2.x - distance1.x;
  let b = distance2.y - distance1.y;
  let c = distance2.z - distance1.z;

  return Math.sqrt(a * a + b * b + c * c);
}



let distance1 = {x: 7, y: 2, z: 3};
let distance2 = {x: 3, y: 5, z: 8};

let distance = calculateDistance(distance1, distance2);

console.log(distance);

/*11.
a. Write a function that generates a random integer value between 5 and 20.
b. Write a function that generates a random integer value between 50 and 100.
c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function.*/

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomNumber(5, 20));

function randomNumber2(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomNumber2(50, 100));


// let secPar = randomNumber(5, 20);
// let num = 5;
function generator (num,secPar){
  //let newAr = [];
   return Array.from(Array(num).keys(secPar))
}

console.log(generator(5, randomNumber(5, 20)));
/*12. Write a function that shuffles the elements of a given array.

Input: [3, 6, 11, 2, 9, 1]

Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array) */
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
console.log(shuffle([3, 6, 11, 2, 9, 1]));