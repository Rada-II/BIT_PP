/*7.
a. Write a function that checks if a given string is written in all capitals.*/

function isAllCaps(str) {
  return str === str.toUpperCase();
}

console.log(isAllCaps('TOP'));
console.log(isAllCaps('TOPa'));

/*b. Write a function that checks if a given string contains any digits.*/
function hasDigits(str) {
  return /\d/.test(str);
}

console.log(hasDigits('t01p2'));
console.log(hasDigits('topoe'));

/*c. Write a function that checks if a given string is a valid hexadecimal color.*/
function isValidHexColor(str) {
  if (str[0] !== '#') {
    return false; 
  }
  
  let hexDigits = str.slice(1); 

  if (hexDigits.length !== 3 && hexDigits.length !== 6) {
    return false; 
  }
  
  for (let i = 0; i < hexDigits.length; i++) {
    let char = hexDigits[i];
    if (!(char >= '0' && char <= '9') && !(char >= 'A' && char <= 'F')) {
      return false; // each character must be a hexadecimal digit
    }
  }
  
  return true; 
}

console.log(isValidHexColor('#FF0000'));
console.log(isValidHexColor('123000'));
// function isValidHexColor(str) {
//   return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(str);
// }

/*d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.*/
function isWithinInterval(num) {
  return num >= 1900 && num <= 2018;
}

console.log(isWithinInterval(2015));
console.log(isWithinInterval(2020));
/*e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).*/
function validator() {
  return {
    stringValidator: isAllCaps,
    passwordValidator: hasDigits,
    colorValidator: isValidHexColor,
    yearValidator: isWithinInterval
  }
}

console.log(validator);