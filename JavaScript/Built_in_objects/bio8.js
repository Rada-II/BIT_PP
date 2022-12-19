/*8. Write a function that calculates a number of days to your birthday.
Input: 25 February
Output: 5 days*/

function birthday(dateOne, dateTwo) {
  let date1 = new Date("02/20/2022");
  let date2 = new Date("02/25/2022");


  let Difference_In_Time = date2.getTime() - date1.getTime();


  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);


  return `Total number of days between dates
               ${date1} 
               ${date2} 
               is ${Difference_In_Days} days!`;
}
console.log(birthday(new Date("02/20/2022"), new Date("02/25/2022")))



// function daysUntilBirthday(birthday) {
//   const today = new Date();
//   const bday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
//   if (bday < today) {
//     bday.setFullYear(bday.getFullYear() + 1);
//   }
//   const diff = bday - today;
//   return Math.ceil(diff / (1000 * 60 * 60 * 24));
// }

// // Test the function
// const birthday = new Date(2021, 1, 1);
// console.log(daysUntilBirthday(birthday));


// function daysUntilBirthday(birthday) {
//   // Get the current date
//   var currentDate = new Date();

//   // Get the current year
//   var currentYear = currentDate.getFullYear();

//   // Create a new Date object for the user's birthday in the current year
//   var birthdayThisYear = new Date(currentYear, birthday.getMonth(), birthday.getDate());

//   // Calculate the number of milliseconds in one day
//   var oneDay = 1000 * 60 * 60 * 24;

//   // Calculate the difference in milliseconds between the current date and the user's birthday this year
//   var difference = birthdayThisYear - currentDate;

//   // If the user's birthday has already passed this year, add one to the current year to get their birthday in the following year
//   if (difference < 0) {
//     birthdayThisYear = new Date(currentYear + 1, birthday.getMonth(), birthday.getDate());
//     difference = birthdayThisYear - currentDate;
//   }

//   // Calculate the number of days until the user's birthday
//   var daysUntil = Math.floor(difference / oneDay);

//   return daysUntil;
// }

// // Example usage:

// var birthday = new Date(2022, 1, 25); // 25 February
// var daysUntil = daysUntilBirthday(birthday);

// console.log(daysUntil + " days until my birthday!");