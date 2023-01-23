/*Applications:
1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, license, stars
○ MobileApp: name, platforms, license, stars
2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React
3. All mobile applications should inherit methods:
○ getData which prints out all the information
○ forAndroid which checks if one of the platforms the application is developed for is
Android

4. Both web and mobile applications should inherit methods:
○ isCCLicense which checks if the license of the application is CC (Creative
Commons)
○ like which increases the number of stars by one
○ showStars which prints out the number of stars */
function Application(name, license, stars) {
  this.name = name;
  this.license = license;
  this.stars = stars;
}

Application.prototype.isCCLicense = function () {
  return this.license === 'CC';
};

Application.prototype.like = function () {
  this.stars = this.stars + 1;
  return this;
};

Application.prototype.showStars = function () {
  console.log(`Number of stars: ${this.stars}`);
  return this;
};

function WebApp(name, url, technologies, license, stars) {
  Application.call(this, name, license, stars);
  this.url = url;
  this.technologies = technologies;
}
WebApp.prototype = Object.create(Application.prototype);

WebApp.prototype.getData = function () {
  console.log(`Name: ${this.name}`);
  console.log(`URL: ${this.url}`);
  console.log(`Technologies: ${this.technologies}`);
  console.log(`License: ${this.license}`);
  this.showStars();
  return this;
};

WebApp.prototype.reactBased = function () {
  return this.technologies.indexOf('React') !== -1;
};

function MobileApp(name, platforms, license, stars) {
  Application.call(this, name, license, stars);
  this.platforms = platforms;
}
MobileApp.prototype = Object.create(Application.prototype);

MobileApp.prototype.getData = function () {
  console.log(`Name: ${this.name}`);
  console.log(`Platforms: ${this.platforms}`);
  console.log(`License: ${this.license}`);
  this.showStars();
  return this;
};

MobileApp.prototype.forAndroid = function () {
  return this.platforms.indexOf('Android') !== -1;
};

//Creating a web app instance
const myWebApp = new WebApp(
  'My Web App',
  'https://mywebapp.com',
  'React',
  'CC',
  3
);
const myWebApp1 = new WebApp(
  'My Web Application',
  'https://mywebapplication.com',
  'javascript',
  'AB',
  5
);
myWebApp.getData();
console.log(myWebApp.reactBased());
console.log(myWebApp.isCCLicense());
myWebApp.like().showStars();

myWebApp1.getData();
console.log(myWebApp1.reactBased());
console.log(myWebApp1.isCCLicense());
myWebApp1.like();
myWebApp1.showStars();
//Creating a mobile app instance
const myMobileApp = new MobileApp('My Mobile App', 'CC', 3, 'Android');
const myMobileApp1 = new MobileApp('My Mobile Application', 'CC', 6, 'iOS');

myMobileApp.getData();
console.log(myMobileApp.forAndroid());
console.log(myMobileApp.isCCLicense());
myMobileApp.like();
myMobileApp.showStars();

myMobileApp1.getData();
console.log(myMobileApp1.forAndroid());
console.log(myMobileApp1.isCCLicense());
myMobileApp1.like();
myMobileApp1.showStars();
