/*2. Write a function that calculates sale tax that should be paid for the product of the given price.
Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
Output2: [ 24, 20 ] // tax only */

const taxRate = 0.2;

function calculateTax(products) {
  const fullPrice = products.map(product => {
    return {
      name: product.name,
      price: product.price * (1 + taxRate),
    };
  });
  const tax = products.map(product => product.price * taxRate);
  return [fullPrice, tax];
}

const products = [
  { name: 'Banana', price: 120 },
  { name: 'Orange', price: 100 },
];

console.log(calculateTax(products));
