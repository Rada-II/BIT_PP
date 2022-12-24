/*6. Write a function that adds string to the left or right of string, by replacing it’s characters.
"0000", ‘123’, "l" -> "0123"
"00000000", ‘123’, "r" -> "12300000" */


function addString(string, string1, side) {
  const stringLength = string.length;
  const string1Length = string1.length;
  if (side === "r") {
    return string1.substr(-string1Length, stringLength) + string.substr(string1Length);
  } else if (side === "l") {
    return string.substr(0, stringLength - string1Length) + string1.substr(0, string1Length);

  }
}
console.log(addString("0000", "123", "l"));  // Output: "0123"
console.log(addString("00000000", "123", "r"));  // Output: "12300000"
// console.log(addString("0000", "123", "top"));  // Output: "Invalid side parameter"


function sum(num1, num2, str) {
  let result = num1
    .split("")
    .reverse()
    .slice(num2.length, num1.length)
    .reverse();

  let result1 = result.concat(num2).join("");

  let result2 = num1
    .split("")

    .slice(num2.length, num1.length);

  let result3 = num2.split().concat(result2).join("");

  let resenje = "";
  if (str === "l") {
    resenje = result1;
  } else if (str === "r") {
    resenje = result3;
  }
  return resenje;
}

console.log(sum("0000", "123", "l"));
