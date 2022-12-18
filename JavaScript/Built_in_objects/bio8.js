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