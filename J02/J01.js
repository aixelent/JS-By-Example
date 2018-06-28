/* Guess number */

const genNumber = Math.ceil(Math.random() * 5);
const num = prompt("Enter number: ");

if (num == genNumber) {
  console.log("Great!");
}
else {
  console.log("Nope");
}