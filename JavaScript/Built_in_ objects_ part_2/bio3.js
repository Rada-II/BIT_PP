/*3. Write a function to alphabetize words of a given string. Alphabetizing a string means
rearranging the letters so they are sorted from A to Z.
"Republic Of Serbia" -> "Rbceilpu Of Sabeir" */

function alphabetize(str) {

  const wordArray = str.split(' ');


  wordArray.forEach((word, index) => {

    const charArray = word.split('');


    charArray.sort();


    wordArray[index] = charArray.join('');
  });


  return wordArray.join(' ');
}

console.log(alphabetize('Republic Of Serbia')); 