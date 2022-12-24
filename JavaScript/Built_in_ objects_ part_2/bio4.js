/*4. Write a function to split a string and convert it into an array of words.
"John Snow" -> [ 'John' , 'Snow' ] */

function splitStr(str) {
  return str.split(' ')
}

console.log(splitStr("John Snow"));