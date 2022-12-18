/*6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,
[

{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]*/
let productLists = [
  { name: "apples", price: 100 },
  { name: "milk", price: 80 },
  { name: "bananas", price: 150 },
];

/*b. Write a function that calculates the total price of your shopping list.*/

function priceob(object) {
  let sum = 0;
  for (let i = 0; i < object.length; i++) {
    sum += object[i].price;
  }
  return sum;
}
console.log(
  priceob([
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 },
  ])
);
/*c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.*/

function getAveragePrice(params) {
  let sum = 0;

  for (let i in params) {
    sum += params[i].price;
  }

  return (sum / params.length).toFixed(3);
}
console.log(
  getAveragePrice([
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 },
  ])
);
/*d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.*/

function getMostExpensive(object) {
  let expensive = 0;
  let expensiveName;
  for (let i = 0; i < object.length; i++) {
    if (object[i].price > expensive) {
      expensive = object[i].price;
      expensiveName = object[i].name;
    }
  }
  return expensiveName.toUpperCase()
}
console.log(
  getMostExpensive([
    { name: "apples", price: 100 },
    { name: "milk", price: 80 },
    { name: "bananas", price: 150 },
  ])
);
