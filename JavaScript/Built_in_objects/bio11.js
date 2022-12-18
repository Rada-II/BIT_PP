/*11.
a. Write a function that generates a random integer value between 5 and 20.*/

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomNumber(5, 20));

/*b. Write a function that generates a random integer value between 50 and 100.*/

function randomNumber2(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomNumber2(50, 100));

/*c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function.*/
function generateNumbers(n, generator) {
  const generatedNumbers = [];

  for (let i = 0; i < n; i++) {
    generatedNumbers.push(generator());
  }

  return generatedNumbers;
}

function randomNumberGenerator() {
  return Math.floor(Math.random() * 10) + 1;
}

const generatedNumbers = generateNumbers(5, randomNumberGenerator);
console.log(generatedNumbers);
