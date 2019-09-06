//Today's forecast
const kelvin = 10;

//Convert Kelvin to Celsius
const celsius = kelvin - 273;

//Convert Kelvin to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//Round down the Fahrenheit 
fahrenheit = Math.floor(fahrenheit);

//Print convert result
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');

//Convert Kelvin to Celsius
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
