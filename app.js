//Today's forecast
const kelvin = 10;

//Convert Kelvin to Celsius
const celsius = kelvin - 273;

//Convert to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//Round down the Fahrenheit 
fahrenheit = Math.floor(fahrenheit);

//Print convert result
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');

//Convert to Celsius
let newton = celsius * (33 / 100);

//Round down the Newton
newton = Math.floor(newton);

//Print convert result
console.log(`The temperature is ${newton} degrees Newton.`);
