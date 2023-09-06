function convertToCelsius() {
    var inputCelsius = document.getElementById("inputCelsius").value;
    var result = (inputCelsius * 9/5) + 32;
    document.getElementById("result").innerHTML = inputCelsius + "°C is equal to " + result.toFixed(2) + "°F";
  }