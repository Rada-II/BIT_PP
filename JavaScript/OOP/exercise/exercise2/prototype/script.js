/*a)Create a TV class with properties like brand, channel and volume. Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
b) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
c) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
d) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
e) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".
f) Create a TV object and test it!
 */
function TV(brand, channel = 1, volume = 50) {
  this.brand = brand;
  this.channel = channel;
  this.volume = volume;
}

TV.prototype.increaseVolume = function () {
  if (this.volume > 0 && this.volume < 100) {
    this.volume += 1;
  }
  return this;
};

TV.prototype.decreaseVolume = function () {
  if (this.volume > 0) {
    this.volume -= 1;
  }
  return this;
};

TV.prototype.setChannel = function (channel) {
  if (channel >= 1 && channel <= 50) {
    this.channel = channel;
  }
  return this;
};

TV.prototype.reset = function () {
  this.channel = 1;
  this.volume = 50;
  return this;
};

TV.prototype.status = function () {
  console.log(
    `${this.brand} is at channel ${this.channel}, volume ${this.volume}`
  );
  return this;
};
let tv1 = new TV('Panasonic', 8, 75);
let tv2 = new TV('Panasonic');
let tv3 = new TV('Sony', 64, 32);
console.log(tv1);
console.log(tv2);
console.log(tv3);
console.log(tv1.increaseVolume().setChannel().reset().status());
