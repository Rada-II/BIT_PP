/* 9.
a. Create an array of persons. A person should be an object with name and age properties.
Experiment with enhanced object literals.
b. Write a function that prints out the names of persons older than 25.
c. Write a function that check if there is a person older than 40.
d. Write a function that checks if all persons are older than 20.*/

const persons = [
  { name: 'Bob', age: 42 },
  { name: 'Jane', age: 22 },
  { name: 'Jim', age: 17 },
  { name: 'Kate', age: 45 },
];

function older(persons) {
  persons.forEach(person => {
    if (person.age > 25) {
      console.log(person.name);
    }
  });
}

older(persons);

function older2(persons) {
  return persons.some(person => person.age > 40);
}

console.log(older2(persons));

function older3(persons) {
  return persons.every(person => person.age > 20);
}

console.log(older3(persons));
