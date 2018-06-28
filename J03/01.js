function add() {
  value1 = document.getElementById("first").value;
  value2 = document.getElementById("second").value;  
  document.getElementById("result").innerHTML = +value1 + +value2;
}

function substract() {
  value1 = document.getElementById("first").value;
  value2 = document.getElementById("second").value;  
  document.getElementById("result").innerHTML = value1 - value2;
}

function multiply() {
  value1 = document.getElementById("first").value;
  value2 = document.getElementById("second").value;  
  document.getElementById("result").innerHTML = value1 * value2;
}

function divide() {
  value1 = document.getElementById("first").value;
  value2 = document.getElementById("second").value;  
  document.getElementById("result").innerHTML = value1 / value2;
}