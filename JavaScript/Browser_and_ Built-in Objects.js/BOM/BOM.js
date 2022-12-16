/*BOM (Window object)
window.navigator
Create a function that prints out in the console the following information
● the platform on which the browser is running
● the information about the browser version
● the company that created that browser
Each piece of information should be printed out in a new row.
Create new “isOnline” function that checks if the browser is online.
It should print out “online” when the browser is online and “offline” when there is
no Internet connection.

window.screen
Create a function that prints out the following information in the console:
● current browser width and height
● max possible browser height

window.location
Write a function that prints out website’s url information in the console:

● full url address
● domain name
● used protocol
● parameters which are part of URL.
Create a function for reloading the page.
Create a function that redirects you to a website address passed to it.
Test all three functions

window.localStorage
Create a function that stores passed data in the browser local storage.
Create a function that reads the stored data, and print it out in console.
If there is no data, print "There is no data" in the console.
Create a function that removes data from the local storage.
Use the previously created functions to store/read/remove some data.
Then add some data in storage and close the browser.
Open the browser again on the same page and use the function to read the
stored value.
Modify functions to work with sessionStorage instead of localStorage.
Try same scenario as with localStorage to examine data lifecycle.

window.history
Play around with the browser forward/back navigation.
Implement a function that navigates two pages back.

Window Methods

● Create a function that shows the user a greeting message using alert
● Then a question is presented to the user using prompt
● When the user provides the answer, that answer is used in the confirm
dialog
● The format of the message in the dialog should be: "We will submit this
answer now! " + the answer
● If the user clicks OK, show alert with success message
● If the user clicks Cancel, don't show anything */

function winNavigator () {
  console.log(`The platform on which the browser is runnin is ${window.navigator.platform}
  The information about the browser version is ${window.navigator.appVersion}
  The company that created that browser is${window.navigator.vendor}`);
  //return alert ("This is called JavaScript function from external file");
}

function navOnline (){
console.log(navigator.onLine ? 'Navigator is online' : 'Navigator is offline');
}

function widthHeight (){
  console.log(`max possible browser height is ${window.screen.availWidth} and
  current browser width is ${window.screen.width} and height is ${window.screen.height}.`);
  }

  
  function reloadPage (){
    console.log(window.location.reload());
  }

  function redirect() {
    window.location.href = "https://google.com/";
   }
   

