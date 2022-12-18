/*1.	Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number.
 A grocery object has a product, a quantity and a price, for example:
{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}*/

let groceries = {
  product: "Milk",
  quantity: 3,
  price: 1.5,
};

function totalPrice(groceries) {
  return "Total price of these 2 groceries is "+ groceries["quantity"] * groceries.price;
}

console.log(totalPrice(groceries));

/*2.	You go to a jewelry shop and try to find the most expensive piece of jewelry. 
You write down the name of each piece of jewelry and its price. 
Create a function that gets the name of the piece of jewelry with the highest price and returns 
"The most expensive one is the {name of jewelry piece}".
Example:
mostExpensive([{name:"DiamondEarings", price: 980}, {name:"Gold watch", price:250}, …])
  - The most expensive one is the diamond Ring.*/

function mostExpensive(jewel) {
  let expensive = 0;
  let expensiveName;

  for (let i = 0; i < jewelry.length; i++) {
    if (jewelry[i].price > expensive) {
      expensive = jewelry[i].price;
      expensiveName = jewelry[i].name;
    }
  }
  return `The most expensive piece of jewelry is ${expensiveName}.`;
}

let jewelry = [
  {
    name: "Diamond Earings",
    price: 980,
  },

  {
    name: "Gold watch",
    price: 250,
  },

  {
    name: "Ring",
    price: 700,
  },
];

console.log(mostExpensive(jewelry));

/*3.	Given a word, create an object that stores the indexes of each letter in an array. 
Make sure the letters are the keys. Make sure the letters are symbols. 
Make sure the indexes are stored in an array and those arrays are values.
Examples:
mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }

mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }*/


const str = 'froggy';
const mapString = str => {
  const newOb = {};
  for (let i = 0; i < str.length; i++) {
    if (newOb.hasOwnProperty(str[i])) {
      newOb[str[i]] = newOb[str[i]].concat(i);
    } else {
      newOb[str[i]] = [i];
    };
  };
  return JSON.stringify(newOb);
};
console.log(mapString(str));

/*4.	And who cursed the most in the fight between you and your spouse? 
Given an object with three rounds, with nested objects as your scores per round, 
return a string of who cursed the most: 
If you, return "ME!" If your spouse, return "SPOUSE!" If a draw, return "DRAW!"
Examples:
determineWhoCursedTheMost([{me: 10,    spouse: 5  },  {    me: 5,    spouse: 10  },   
{    me: 0, spouse: 10,  }]) ➞ "DRAW!"
determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9,  spouse: 10}]) ➞ "ME!"
determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9,  spouse: 44 }, { me: 10,    spouse: 55}]) ➞ "SPOUSE!"*/
determineWhoCursedTheMost([{ me: 10, spouse: 5 }, { me: 5, spouse: 10 },
  { me: 0, spouse: 10, }])
  
  function determineWhoCursedTheMost(arrResults) {
    let result = { me: 0, spouse: 0 }
    for (let i = 0; i < arrResults.length; i++) {
      result['me'] = result['me'] + arrResults[i]['me']
      result['spouse'] = result['spouse'] + arrResults[i]['spouse']
    }
    if (result['me'] === result['spouse']) return "Draw"
    return result['me'] > result['spouse'] ? "ME!" : "SPOUSE!"
  }
  
  console.log(determineWhoCursedTheMost([{me: 10, spouse: 5},  {me: 5, spouse: 10},   
    {me: 10, spouse: 10,}]));
/*5. Create a function that converts color in RGB format to Hex format.
Examples:
rgbToHex({red: 0, green: 128,  blue: 192}) ➞ "#0080c0" */


function ColorToHex(color) {
  let hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
console.log(ConvertRGBtoHex(0, 128, 192))





    /*6.	Create a function that takes an amount of monetary change 
(e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels 
and pennies. Your function should return an object.
Coin	Value
Penny	0.01
Nickel	0.05
Dime	0.10
Quarter	0.25

Examples:
makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }

makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }

makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }*/

function makeChange(money) {
  let result = { "q": 0, "d": 0, "n": 0, "p": 0 };
  const penny = 1;
  const nickel = 5;
  const dime = 10;
  const quarter = 25;
  let rest = money;
  if (rest / quarter >= 1) {
    result['q'] = (rest - (rest % quarter)) / quarter;
    rest = rest % quarter;

  } if (rest / dime >= 1) {
    result['d'] = (rest - (rest % dime)) / dime;
    rest = rest % dime;

  } if (rest / nickel >= 1) {
    result['n'] = (rest - (rest % nickel)) / nickel;
    rest = rest % nickel;

  } if (rest / penny >= 1) {
    result['p'] = (rest - (rest % penny)) / penny;
    rest = rest % penny;
  }

  return result
}

console.log(makeChange(92));

/*7.	Create a function that takes an array of objects like
{ name: "John", notes: [3, 5, 4]} and returns an array of objects like
{ name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.
Examples:
[
  { name: "John", notes: [3, 5, 4]}
]
➞
[
  { name: "John", avgNote: 4 }
 ]*/

// let arrObj = [{name: "John", notes: [3, 5, 4]}];

//   function avgNote(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//       result = result + arr[i]//result +=arr[i]
//     }
//     return result / arr.length
//   }
// //console.log(arrObj.notes.length);

//   function avgrNotes (arrObj){
//     newArr = [];
//     for(let i = 0; i < arrObj.length; i++ ){
//     newObj ={
//       name: arrObj[i].name,
//       avgNotes: avgNote(arrObj[i].notes)
//     }
//     newArr.push(newObj);
//     }
//     return newArr;
//   }
//   console.log(JSON.stringify(avgrNotes(arrObj)));

  /*8.	Given an object with students and the grades that they made on the tests that they took, 
determine which student has the best Test Average. The key will be the student's name and the 
value will be an array of their grades. You will only have to return the student's name. 
You do not need to return their Test Average.

getBestStudent([{  name: "John", grades: [100, 90, 80]}, {name: "Bob", grades: [100, 70, 80]}…]) 
➞ "John" // John's avg = 90 // Bob's avg = 83.33
 */

function avgNote(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result / arr.length
}


function avgrNotes (arrO){
  newArr = [];
  for(let i = 0; i < arrO.length; i++ ){
  newObj ={
    name: arrO[i].name,
    grades: avgNote(arrO[i].grades)
  }
  newArr.push(newObj);
  }
  return newArr;
}

//let theBest = avgNotes (arrObj);
let arrOb = [{  name: "John", grades: [100, 90, 80]}, {name: "Bob", grades: [100, 70, 80]}];
function theBestAg (arrOb){
  let newAr = avgrNotes(arrOb); 
  let theBestGr = 0 ;
  let theBestStudent;
  for(let i = 0; i < newAr.length; i++ ){
    if(newAr[i]["grades"] >theBestGr ){
      theBestGr = newAr[i]["grades"];
      theBestStudent = newAr[i]["name"]; 
    }

  }
  return `The best student is ${theBestStudent}.`
}

console.log(theBestAg([{ name: "John", grades: [100, 90, 80]}, {name: "Bob", grades: [100, 70, 80]}]));