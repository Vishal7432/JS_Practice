/// Date

// let myDate = new Date();
// console.log("Current Date and Time: ", myDate.toLocaleDateString());
// console.log(typeof myDate); // object

// let myBirthday = new Date(2003, 1, 11); // Month is 0 based index
// let myBirthday = new Date("2003-01-11"); // Month is 0 based index

let myBirthday = new Date("01-11-2003"); // Month is 0 based index

// console.log("My Birthday: ", myBirthday);
// console.log("My Birthday: ", myBirthday.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log("Time Stamp: ", myTimeStamp);
// console.log(myBirthday.getTime());

// console.log("Time Stamp Date: ", new Date(myTimeStamp).toLocaleDateString());

console.log(Math.floor(Date.now() / 1000)); // Seconds since Jan 01 1970

/// Get Date Methods
// console.log("Year: ", myBirthday.getFullYear());
// console.log("Month: ", myBirthday.getMonth() + 1); // Month is 0 based index
// console.log("Date: ", myBirthday.getDate());
// console.log("Day: ", myBirthday.getDay()); // 0 - Sunday, 6 - Saturday

/// Set Date Methods
// myBirthday.setFullYear(2000);
// myBirthday.setMonth(0); // Month is 0 based index
// myBirthday.setDate(1);
// console.log("Updated Birthday: ", myBirthday.toLocaleDateString());

newDate.toLocaleDateString("default", {
  weekday: "long",
}); // e.g. "Monday"

// ++++++++++++++++++++++++++++++ Exercises ++++++++++++++++++++++++++++++

// 1. Create a Date object for your next birthday. Log the date in the format "MM/DD/YYYY".
let nextBirthday = new Date("2024-01-11");
console.log(nextBirthday.toLocaleDateString());
// 2. Calculate the number of days between today and your next birthday.
let today = new Date();
let timeDiff = nextBirthday - today;
let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
console.log(`Days until next birthday: ${daysDiff} days`);

// 3. Create a function that takes a date as input and returns the day of the week for that date.
function getDayOfWeek(date) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
}

let someDate = new Date("2023-12-25");
console.log(
  `The day of the week for ${someDate.toLocaleDateString()} is ${getDayOfWeek(
    someDate
  )}`
);
