// function to convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// driver code
let celsius = 100;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} Celsius is equal to ${fahrenheit} Fahrenheit`);