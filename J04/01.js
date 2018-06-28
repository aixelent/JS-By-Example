function celsiusToFahrenheit(celsius) {
  let celsiusTemp = celsius;
  let celsToFahrenheit = celsiusTemp * 9 / 5 + 32;
  let message = celsiusTemp + " is " + celsToFahrenheit + "";
  console.log(message);
}

function fahrenheittoCelsius(fahrenheit) {
  let fahrenheitTemp = fahrenheit;
  let fahrToCelsius = (fahrenheitTemp - 32) * 5 / 9;
  let message = fahrenheitTemp + " is " + fahrToCelsius + "";
  console.log(message);
}

celsiusToFahrenheit(35);
fahrenheittoCelsius(70);