/*10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
b. Write a function that calculates the distance between two points in the space.*/
function point(posX, posY, posZ) {
  this.x = posX;
  this.y = posY;
  this.z = posZ;
  return{x,y,z}
}
console.log(point(3,5,1));
function calculateDistance(distance1, distance2) {
  let a = distance2.x - distance1.x;
  let b = distance2.y - distance1.y;
  let c = distance2.z - distance1.z;

  return Math.sqrt(a * a + b * b + c * c);
}



let distance1 = {x: 7, y: 2, z: 3};
let distance2 = {x: 3, y: 5, z: 8};

let distance = calculateDistance(distance1, distance2);

console.log(distance);