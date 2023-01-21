'use strict';
/*create a new JavaScript file named shopping.js and make it so that all
code written in the file follows strict mode. Also try to implement error handling as well.
Create an anonymous immediately-invoking function that will hold the main execution of all
program calls. Writing a simple command console.log(“Hi”) inside this function and running
the code should output “Hi“ in the console.
Create constructor functions with properties representing the following “things”:
 Product - product id (random number of 5 digits generated on every product creation),
name, price (with 2 decimal places), expiration date
 ShoppingBag - a list of products (initially empty; function constructor does not have any
input parameters)
Add getInfo method to Product. It should return a formatted string containing product code
(the first and last letter of the name together with the product id), name and price.
"Banana" -> BA32784, Banana, 129.31
Add addProduct method to ShoppingBag. It should receive a Product and add it to the
product list. You can add a product to the list only if it has a valid expiration date.
Add a method to ShoppingBag that calculates the average product price of products in your
product list and prints out this value with the precision of three decimals.
Add getMostExpensive method that finds the most expensive product and prints out its info.
Add calculateTotalPrice method to ShoppingBag that calculates the total price of products
in the shopping bag list.
Create a constructor function with properties representing the following:
 PaymentCard - account balance (number with 2 decimal places), active or inactive status,
valid until date
Create checkoutAndBuy function which receives shopping bag and payment card and prints if
the purchase is successful or not. Purchase is successful only if the amount on the card is greater
or equal to the total price of products in the shopping bag. If there is not enough money, print out
the amount that is missing to complete the purchase. */

'use strict';

(function () {
  console.log('Hi');

  function Product(name, price, expirationDate) {
    this.id = Math.floor(Math.random() * 90000) + 10000;
    this.name = name;
    this.price = price;
    this.expirationDate = expirationDate;

    this.getInfo = function () {
      return `${this.name.substring(0, 1)}${this.name.substring(
        this.name.length - 1
      )}${this.id}, ${this.name}, ${this.price.toFixed(2)}`;
    };
  }

  let shoppingBag = {
    products: [],
    addProduct: function (product) {
      if (product.expirationDate >= Date.now()) {
        this.products.push(product);
      } else {
        throw new Error(
          'Product has expired and cannot be added to the shopping bag.'
        );
      }
    },
    getAveragePrice: function () {
      if (this.products.length == 0) {
        throw new Error('Shopping bag is empty.');
      }
      let totalPrice = 0;
      this.products.forEach(function (product) {
        totalPrice += product.price;
      });
      return (totalPrice / this.products.length).toFixed(3);
    },
    getMostExpensive: function () {
      if (this.products.length == 0) {
        throw new Error('Shopping bag is empty.');
      }
      let mostExpensive = this.products[0];
      this.products.forEach(function (product) {
        if (product.price > mostExpensive.price) {
          mostExpensive = product;
        }
      });
      return mostExpensive.getInfo();
    },
    calculateTotalPrice: function () {
      if (this.products.length == 0) {
        throw new Error('Shopping bag is empty.');
      }
      let totalPrice = 0;
      this.products.forEach(function (product) {
        totalPrice += product.price;
      });
      return totalPrice.toFixed(2);
    },
  };

  let paymentCard = {
    balance: 0,
    status: '',
    validUntil: 0,
  };

  function checkoutAndBuy() {
    if (
      paymentCard.status === 'active' &&
      paymentCard.validUntil >= Date.now()
    ) {
      let totalPrice = shoppingBag.calculateTotalPrice();
      if (paymentCard.balance >= totalPrice) {
        console.log('Purchase successful!');
      } else {
        console.log(
          'Insufficient funds. Please add $' +
            (totalPrice - paymentCard.balance).toFixed(2) +
            ' to complete purchase.'
        );
      }
    } else {
      throw new Error(
        'Payment card is inactive or has expired. Please check and try again.'
      );
    }
  }
})();

let banana = new Product('Banana', 129.31, new Date('2022-12-31'));
let apple = new Product('Apple', 0.99, new Date('2022-11-30'));
let orange = new Product('Orange', 1.99, new Date('2022-12-31'));
shoppingBag.addProduct(banana);
shoppingBag.addProduct(apple);
shoppingBag.addProduct(orange);

paymentCard.balance = 150;
paymentCard.status = 'active';
paymentCard.validUntil = new Date('2023-01-31');

checkoutAndBuy();
