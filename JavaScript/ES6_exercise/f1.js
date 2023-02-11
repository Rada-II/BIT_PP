/*1. Write a function that capitalizes the first letter of each string argument it receives.
Function arguments: ["hello", "there", "ES", 6]
Output: ["Hello", "There", "ES"] */
function capFirst(...strings) {
  return strings
    .map(str => {
      if (typeof str === 'string') {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      return str;
    })
    .filter(str => typeof str === 'string');
}

console.log(capFirst('hello', 'there', 'ES', 6));
