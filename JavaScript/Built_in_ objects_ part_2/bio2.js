/* 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
Note: Assume punctuation, numbers and symbols are not included in the passed string.
“Webmaster” -> “abeemrstw”*/

/*moramo da koristimo toLowerCase zbog prvog velikog slova, ne znam jeli to greska ili "namerno" */
function alphabeticalOrder(str) {
  return str.toLowerCase().split('').sort().join('');
}

console.log(alphabeticalOrder('Webmaster'));