function convertTemperature(temperature, unit) {
  if (unit === "C") {
    const fahrenheit = temperature * (9 / 5) + 32; // Fixed the calculation
    return fahrenheit.toFixed(2) + " F";
  } else if (unit === "F") {
    const celsius = (temperature - 32) * (5 / 9); // Fixed the calculation
    return celsius.toFixed(2) + " C";
  } else {
    return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
  }
}
const temperature=25;
const unit="C";
const result=convertTemperature(temperature,unit);
console.log(result);

const temperature1=-40;
const unit1="F";
const result1=convertTemperature(temperature,unit);
console.log(result1);