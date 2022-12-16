/*window.location
Write a function that prints out website’s url information in the console:

● full url address
● domain name
● used protocol
● parameters which are part of URL.
*/
function hostName() {
  console.log(`This is this website's url information:
  domain name is ${window.location.hostname}
  used protocol is ${window.location.protocol}
  and these are parameters which are part of URL: ${window.location.search}
  full url address is ${window.location.href}`);
}

hostName();

/*window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.
Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the
stored value.
Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data lifecycle. */
function storeData(){
  let localStorage = window.localStorage;
  localStorage.setItem('JavaScript', 'homework');
  console.log(localStorage);
   
} 
storeData();

function readsData(){
let myValue = window.localStorage.getItem('JavaScript');
if(myValue === null){
  console.log("There is no data");
}else console.log(myValue);
}
readsData()

function removesData (){
  let myDeletedValue = window.localStorage.clear();
  console.log(myDeletedValue);
}
removesData();


function storeData1(){
  let localStorage = window.sessionStorage;
  localStorage.setItem('JavaScript', 'homework');
  console.log(localStorage);
   
} 
storeData1();

function readsData1(){
let myValue = window.sessionStorage.getItem('JavaScript');
if(myValue === null){
  console.log("There is no data");
}else console.log(myValue);
}
readsData1()

function removesData1 (){
  let myDeletedValue = window.sessionStorage.clear();
  console.log(myDeletedValue);
}
removesData1();




/*window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back.
 */

function twoPagesBack() {
  console.log(window.history.go(-2));
}
twoPagesBack()

/*Window Methods

● Create a function that shows the user a greeting message using alert
● Then a question is presented to the user using prompt
● When the user provides the answer, that answer is used in the confirm
dialog
● The format of the message in the dialog should be: "We will submit this
answer now! " + the answer
● If the user clicks OK, show alert with success message
● If the user clicks Cancel, don't show anything */

function showAlert() {

  alert("Hello world!");

  let a = prompt(" Do you like JavaScript ?");

    if (a != null) {
    
    prompt = "We will submit this answer now! " + a;
    alert("we received you answer successfully ")

  }
}
showAlert()



/*
●	Print out the whole date object in the console.
●	Print out the current time in the console.
●	Print out the current date in the console.
*/

let dateObject = new Date();
let fullDate = Date();
let currentTime = dateObject.toLocaleTimeString();
let currentDate = dateObject.toLocaleDateString();


console.log("Current time with hours and minutes: ", currentTime);
console.log("Current date: ", currentDate);


/*==================================================================
●	Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.
==================================================================*/

function randomArray() {
  let array = [];

  while (array.length < 10) {
    array.push(Math.floor(Math.random() * 50) + 1);
  }

  console.log(array);
};
randomArray();

/*
●	Round
Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
*/
let array1 = [81.78953, 15.11223, 73.97865, 45.47591];

function roundedDecimal(params) {

  let rounded = params.map(function (num) {
    return Math.round(num * 100) / 100;
  });

  console.log(rounded);
};
roundedDecimal(array1);

/*
●	Floor
Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
*/

let array2 = [29.87, 51.11, 83.64, 25.31];

function floorInteger(params) {

  let rounded = params.map(function (num) {
    return Math.round(num);
  });

  console.log(rounded);
};
floorInteger(array2);

/*
●	Max
Create a function that finds and prints out the biggest element in the passed array of numbers.
*/

let array3 = [5, 55, 57, 95];

function biggestElement(params) {

  console.log(Math.max(...params));

};
biggestElement(array3);