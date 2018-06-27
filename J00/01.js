/* Get current Day and date */

let today = new Date();
let day = today.getDay();
let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log("Today is: " + days[day]);
console.log(hour + ":" + minute + ":" + seconds);