class CoffeeShop {
  constructor(name) {
    this.name = name;
    this.menu = [
      { name: 'lemonade', type: 'drink', price: 1.25 },
      { name: 'orange juice', type: 'drink', price: 1.25 },
      { name: 'cranberry juice', type: 'drink', price: 1.25 },
      { name: 'pineapple juice', type: 'drink', price: 1.25 },
      { name: 'lemon iced tea', type: 'drink', price: 1.5 },
      { name: 'vanilla chai latte', type: 'drink', price: 2.5 },
      { name: 'hot chocolate', type: 'drink', price: 2.0 },
      { name: 'iced coffee', type: 'drink', price: 1.75 },
      { name: 'tuna sandwich', type: 'food', price: 4.0 },
      { name: 'ham and cheese sandwich', type: 'food', price: 4.5 },
      { name: 'bacon and egg', type: 'food', price: 5.0 },
      { name: 'steak', type: 'food', price: 8.5 },
      { name: 'hamburger', type: 'food', price: 7.0 },
      { name: 'cinnamon roll', type: 'food', price: 2.0 },
    ];
    this.orders = [];
  }
  addOrder(item) {
    const found = this.menu.find(i => i.name === item);
    if (found) {
      this.orders.push(item);
      return 'Order added!';
    } else {
      return 'This item is currently unavailable!';
    }
  }
  fulfillOrder() {
    if (this.orders.length > 0) {
      const item = this.orders.shift();
      return `The ${item} is ready!`;
    } else {
      return 'All orders have been fulfilled!';
    }
  }
  listOrders() {
    return this.orders;
  }
  dueAmount() {
    return this.orders
      .reduce((total, item) => {
        const found = this.menu.find(i => i.name === item);
        return total + found.price;
      }, 0)
      .toFixed(2);
  }
  cheapestItem() {
    return this.menu.sort((a, b) => a.price - b.price)[0].name;
  }
  drinksOnly() {
    return this.menu.filter(item => item.type === 'drink').map(i => i.name);
  }
  foodOnly() {
    return this.menu.filter(item => item.type === 'food').map(i => i.name);
  }
}
let dreams = new CoffeeShop('Dream Coffee Shop');
console.log(dreams.addOrder('hot cocoa'));
console.log(dreams.addOrder('iced tea'));
console.log(dreams.addOrder('cinnamon roll'));
console.log(dreams.addOrder('iced coffee'));
console.log(dreams.listOrders());
console.log(dreams.dueAmount());
console.log(dreams.fulfillOrder());
console.log(dreams.fulfillOrder());
console.log(dreams.fulfillOrder());
console.log(dreams.listOrders());
console.log(dreams.cheapestItem());
console.log(dreams.drinksOnly());
console.log(dreams.foodOnly());
