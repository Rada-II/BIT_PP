/*Write a class called CoffeeShop, which has three instance variables and seven methods. Variables are:
a) name : a string (basically, of the shop),
b) menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price,
c) orders : an empty array.

Methods:
a) addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
b) fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
c) listOrders: returns the list of orders taken, otherwise, an empty array.
d) dueAmount: returns the total amount due for the orders taken, round off up to two decimal places.
e) cheapestItem: returns the name of the cheapest item on the menu.
f) drinksOnly: returns only the item names of type drink from the menu.
g) foodOnly: returns only the item names of type food from the menu.

IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

Examples:
tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process

tcs.addOrder("cinnamon roll") ➞  "Order added!"
tcs.addOrder("iced coffee") ➞ "Order added!"
tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order

tcs.dueAmount() ➞ 2.17

tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
tcs.fulfillOrder() ➞ "The iced coffee is ready!"
tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// all orders have been presumably served

tcs.listOrders() ➞ []
// an empty array is returned if all orders have been exhausted

tcs.dueAmount() ➞ 0.0
// no new orders taken, expect a zero payable

tcs.cheapestItem() ➞ "lemonade"
tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]

 */

class CoffeeShop {
  constructor(name) {
    this.name = name;
    this.menu = [
      { name: 'lemonade', type: 'drink', price: 1.99 },
      { name: 'orange juice', type: 'drink', price: 2.49 },
      { name: 'cranberry juice', type: 'drink', price: 2.99 },
      { name: 'pineapple juice', type: 'drink', price: 3.49 },
      { name: 'lemon iced tea', type: 'drink', price: 2.99 },
      { name: 'vanilla chai latte', type: 'drink', price: 4.49 },
      { name: 'hot chocolate', type: 'drink', price: 3.49 },
      { name: 'iced coffee', type: 'drink', price: 2.99 },
      { name: 'tuna sandwich', type: 'food', price: 5.99 },
      { name: 'ham and cheese sandwich', type: 'food', price: 6.49 },
      { name: 'bacon and egg', type: 'food', price: 6.99 },
      { name: 'steak', type: 'food', price: 8.99 },
      { name: 'hamburger', type: 'food', price: 7.49 },
      { name: 'cinnamon roll', type: 'food', price: 2.99 },
    ];
    this.orders = [];
  }

  addOrder(item) {
    let itemExist = false;
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].name === item) {
        this.orders.push(item);
        itemExist = true;
        break;
      }
    }
    if (itemExist) {
      return 'Order added!';
    } else {
      return 'This item is currently unavailable!';
    }
  }

  fulfillOrder() {
    if (this.orders.length > 0) {
      let item = this.orders.shift();
      return `The ${item} is ready!`;
    } else {
      return 'All orders have been fulfilled!';
    }
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    let total = 0;
    for (let i = 0; i < this.orders.length; i++) {
      for (let j = 0; j < this.menu.length; j++) {
        if (this.orders[i] === this.menu[j].name) {
          total += this.menu[j].price;
        }
      }
    }
    return total.toFixed(2);
  }

  cheapestItem() {
    let cheapest = this.menu[0];
    for (let i = 1; i < this.menu.length; i++) {
      if (this.menu[i].price < cheapest.price) {
        cheapest = this.menu[i];
      }
    }
    return cheapest.name;
  }

  drinksOnly() {
    let drinks = [];
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].type === 'drink') {
        drinks.push(this.menu[i].name);
      }
    }
    return drinks;
  }

  foodOnly() {
    let foods = [];
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].type === 'food') {
        foods.push(this.menu[i].name);
      }
    }
    return foods;
  }
}

let coffeePlace = new CoffeeShop('Dream Coffee Shop');
console.log(coffeePlace.addOrder('hot cocoa'));
console.log(coffeePlace.addOrder('iced tea'));
console.log(coffeePlace.addOrder('cinnamon roll'));
console.log(coffeePlace.addOrder('iced coffee'));
console.log(coffeePlace.listOrders());
console.log(coffeePlace.dueAmount());
console.log(coffeePlace.fulfillOrder());
console.log(coffeePlace.fulfillOrder());
console.log(coffeePlace.fulfillOrder());
console.log(coffeePlace.listOrders());
console.log(coffeePlace.cheapestItem());
console.log(coffeePlace.drinksOnly());
console.log(coffeePlace.foodOnly());
