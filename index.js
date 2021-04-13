//circle
const circle = require("./circle.js");

// Use the exported functions
const radius = 5;
console.log(
  `The circumference of a circle of radius ${radius} is ${circle.circumference(
    radius
  )}`
);
console.log(`Its area is ${circle.area(radius)}`);

//Accounting
const Account = require("./accounting.js");

// Create object from the exported class
const myAccount = new Account("Jeff");
myAccount.credit(150);
console.log(myAccount.describe());

//time and date
// Load the moment package as a module
const moment = require("moment");

// Format the current date
console.log(moment().format("dddd, MMMM Do YYYY"));

// COmpute the number of years since the specified date
console.log(moment("1976-11-26").fromNow());