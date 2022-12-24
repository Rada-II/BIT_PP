/*5. Write a function to convert a string to its abbreviated form.
"John Snow" -> "John S." */

function abbreviatedForm(str) {

  let newWord = str.split(' ');
  let wordOne = newWord[0];
  // let wordTwo = newWord[newWord.length - 1][0] + '.';

  let wordTwo = newWord[1].slice(0, 1) + ".";
  return `${wordOne} ${wordTwo}`;

}
console.log(abbreviatedForm("John Snow"));