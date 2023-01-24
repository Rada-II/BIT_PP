/*a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
d) Create a 3 car objects and test it!
 */
function Car(brand, model, speed) {
  this.brand = brand;
  this.model = model;
  this.speed = speed;
  this.motion = 'not moving';
}
Car.prototype.checkMotion = function () {
  if (this.speed > 0) {
    this.motion = 'moving';
  } else {
    this.motion = 'not moving';
  }
  return this.motion;
};
Car.prototype.accelerate = function (value) {
  this.speed += value;
  this.checkMotion();
  return this;
};
Car.prototype.break = function (value) {
  this.speed -= value;
  if (this.speed < 0) {
    this.speed = 0;
  }
  this.checkMotion();
  return this;
};
Car.prototype.status = function () {
  console.log(
    `${this.brand} ${this.model} is running at ${
      this.speed
    }km/h, ${this.checkMotion()}`
  );
  return this;
};
Car.prototype.stop = function stop() {
  this.speed = 0;
  this.checkMotion();
  return this;
};
const car1 = new Car('Ford', 'Mondeo', 0);
const car2 = new Car('Toyota', 'Auris', 0);
const car3 = new Car('Honda', 'Civic', 0);

car1.accelerate(50).break(10).status();
car2.accelerate(70).stop().status();
car3.accelerate(30).status();
