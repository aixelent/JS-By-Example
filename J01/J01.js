/* Leap year */

const year = 1988;

function isLeap() {
  if(year % 400 === 0 || ((year % 4 === 0) && (year % 100 != 0))) {
    return true;
  } 
  else {
    return false;
  }
}

console.log(isLeap());
