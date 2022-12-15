/*1. Write a function that sorts array while keeping the array structure. 
Numbers should be first then letters both in ascending order.
Examples:
numThenChar([[1, 2, 4, 3, "a", "b"], [6, "c", 5], [7, "d"], ["f", "e", 8] ]) ➞ [[1, 2, 3, 4, 5, 6], [7, 8, "a"], ["b", "c"], ["d", "e", "f"]]
numThenChar([[1, 2, 4.4, "f", "a", "b"], [0], [0.5, "d","X",3,"s"], ["f", "e", 8], ["p","Y","Z"], [12,18]]) ➞ 
[[0, 0.5, 1, 2, 3, 4.4], [8], [12, 18, "X", "Y", "Z"], ["a", "b", "d"], ["e", "f", "f"], ["p", "s"]]*/

function numThenChar(arr) {
  let lenArr = arr.map(a => a.length);
  arr = arr.flat();
  let arrNum = arr.filter(num => !isNaN(num))
  let arrAlpha = arr.filter(num => isNaN(num))
  arrNum.sort((a, b) => a - b)
  arrAlpha.sort()
  arr = [...arrNum, ...arrAlpha];
  //console.log(lenArr)
  let sol = [];
  for (let len of lenArr) {
    let temp = []
    while (len) {
      temp.push(arr.shift())
      len--;
    }
    sol.push(temp)
  }
  return sol;
}


console.log(JSON.stringify(numThenChar([[1, 2, 4, 3, "a", "b"], [6, "c", 5], [7, "d"], ["f", "e", 8]])))


/*2. Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.
Triangle fits if it has the same or smaller size as the hole.
The function should return false if the triangle with that dimensions is not possible.
Examples:
doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false*/

let areaTri = (arr) => {
  let s = 0;
  let area = 0;
  if ((arr[0] + arr[1]) <= arr[2] || (arr[0] + arr[2]) <= arr[1] || (arr[1] + arr[2]) <= arr[0]) {
    area = false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      s += arr[i];
    };
    //console.log("s: " + s);
    s = s / 2;
    //console.log("s/2 : " + s);
    area = Math.sqrt(s * (s - arr[0]) * (s - arr[1]) * (s - arr[2]));
  }
  //console.log("area of triangle: " + area);
  return area;
};


const doesTriangleFit = (arr, arr1) => {
  let area1 = areaTri(arr);
  let area2 = areaTri(arr1);
  //console.log("area1: " + area1);
  //console.log("area2: " + area2);
  if (area1 === false || area2 === false) {
    return false;
  } else if (area1 <= area2) {
    return true;
  }
};


console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]));
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2]));
console.log(doesTriangleFit([1, 2, 4], [1, 2, 6]));

/*3. Create a function that takes a string as an argument and returns true if each letter in the string is surrounded by a plus sign.
 Return false otherwise. For clarity, each letter must have a plus sign on both sides.
Examples:
plusSign("+f+d+c+#+f+") ➞ true
plusSign("+d+=3=+s+") ➞ true
plusSign("f++d+g+8+") ➞ false
plusSign("+s+7+fg+r+8+") ➞ false*/


function signAround(str) {
  for (var i = 0; i < str.length; i++) {
    if (/[a-z]/i.test(str.charAt(i))) {
      if (str.charAt(i - 1) != '+' || str.charAt(i + 1) != '+') {
        return false;
      }
    }
  }
  return true;
}

console.log(signAround("+f+d+c+#+f+"));
console.log(signAround("f++d+g+8+"));
console.log(signAround("+f+d+c+#+f+"));


/*4. Create a function that takes a 5x5 2D array and returns true if it has at least one Bingo, and false if it doesn't.
Only check for diagonals, horizontals and verticals.
Examples:
bingoCheck([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
]) ➞ true
bingoCheck([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
]) ➞ true
bingoCheck([
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
]) ➞ true
bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
]) ➞ false*/

function winCheck(bingo) {
  var winner = false;
  for (i = 0; i < 3; i++)
    if (winner = (bingo[i][0] == 1) && (bingo[i][1] == 1) && (bingo[i][2] == 1))
      break;
    else if (winner = (bingo[0][i] == 1) && (bingo[1][i] == 1) && (bingo[2][i] == 1))
      break;

  if (!winner)
    if (bingo[1][1] == 1)
      if (!(winner = (bingo[0][0] == 1) && (bingo[2][2] == 1)))
        winner = (bingo[0][2] == 1) && (bingo[2][0] == 1);

  return winner;
}
console.log(winCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
]));


/*5. When a person receives a blood transfusion, it is essential to make sure that the donor's blood type
 is compatible with the receiver's blood type. Receiving a blood type that is not compatible with your 
 own can be life-threating, so blood banks always make sure to note the type of blood they receive from 
 donors so that they can ensure a safe transfusion.
Blood types are named according to three factors: presence of antigen A, presence of antigen B, and presence 
of Rh factor. If antigen A is found, the blood type includes the letter "A". If antigen B is found, the blood
 type includes the letter "B". And if the Rh factor is present, the blood type ends with "+"; otherwise, it 
 ends with "-". If neither antigen A nor antigen B are found, the blood type includes the letter "O".
For example, a person with only antigen A would have the blood type "A-". A person with both antigens A and B
 and the Rh factor would have blood type "AB+", and a person wih only the Rh factor would have blood type "O+".
The rules for giving and receiving blood are as follows:
A person with antigen A may only give blood to another person with antigen A.
A person with antigen B may only give blood to another person with antigen B.
A person with the Rh factor may only give blood to another person with the Rh factor.
A person with none of the above factors (O-) can give blood to anyone.
Write a function that takes in a donor's and receiver's blood types as strings and returns whether or not the
 donor can safely give blood to the receiver, according to the rules above. For clarity: all letters are capital 
 and each blood type will be one of the following strings: "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-".
Examples:
canGiveBlood("O+", "A+") ➞ true
canGiveBlood("A-", "B-") ➞ false
canGiveBlood("A-", "AB+") ➞ true
. */
function canGiveBlood(type1, type2) {
  if (type1 == "A+")
    if (type2 == "A+" || type2 == "AB+")
      return true;

  if (type1 == "A-")
    if (type2 == "A-" || type2 == "A+" || type2 == "AB+" || type2 == "AB-")
      return true;

  if (type1 == "B-")
    if (type2 == "B+" || type2 == "B-" || type2 == "AB-" || type2 == "AB+")
      return true;

  if (type1 == "B+")
    if (type2 == "B+" || type2 == "AB+")
      return true;

  if (type1 == "AB+")
    if (type2 == "AB+")
      return true;

  if (type1 == "AB-")
    if (type2 == "AB+" || type2 == "AB-")
      return true;


  if (type1 == "0+")
    if (type2 == "A+" || type2 == "B+" || type2 == "AB+" || type2 == "0+")
      return true;

  if (type1 == "0-")
    return true;


    return false;

}

console.log(canGiveBlood("0+", "A+"));
console.log(canGiveBlood("A-", "B-"));
console.log(canGiveBlood("A-", "AB+"));
