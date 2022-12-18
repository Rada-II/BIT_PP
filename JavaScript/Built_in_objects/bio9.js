/*9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 8:22:13
Output: 3 hours 21 minutes 9 seconds*/

let time1 = "8:22:13";
let time2 = "11:43:22";

function calculateTimeBetweenTime2AndTime1(time1, time2) {
   let time1Elements;
   let time2Elements;
   let differenceBetweenHours;
   let differenceBetweenMinutes;
   let differenceBetweenSeconds;
   let differenceArray = [];
   let hour;
   let minutes;
   let seconds;
   let result;

    // Change string elements to array elements
    time1Elements = time1.split(":");
    time2Elements = time2.split(":");

    // Calculate difference between array elements
    differenceBetweenHours = time2Elements[0] - time1Elements[0];
    differenceBetweenMinutes = time2Elements[1] - time1Elements[1];
    differenceBetweenSeconds = time2Elements[2] - time1Elements[2];

    // Save value in new array
    differenceArray = [differenceBetweenHours, differenceBetweenMinutes, differenceBetweenSeconds];


    hour = parseInt(differenceArray[0]);
    minutes = parseInt(differenceArray[1]);
    seconds = parseInt(differenceArray[2]);

    // Check relation between seconds, minutes and hours
    if (seconds < 0) {
        seconds = 60 + seconds;
        minutes--;
    }
    if (minutes < 0) {
        minutes = 60 + minutes;
        hour--;
    }

    result = hour + ":" + minutes + ":" + seconds;

    console.log(result);
}

calculateTimeBetweenTime2AndTime1(time1, time2);