/*
//para ejecutar el codigo: escriba en consola, "node APP.js"

//primera forma de importar
const saludo = require('./saludos.js');

//primera forma de llamar las funciones una vez que la hayemos importado
console.log(saludo.saludar());
console.log(saludo.HolaMundo());

*/

//esta es otra forma de importar 
const {saludar, HolaMundo} = require('./saludos.js');

//esta es otra forma de llamar las funciones una vez la hayamos importado
console.log(saludar());
console.log(HolaMundo());
console.log('buenas tardes desde console.log');
console.warn('buenas tardes desde console.warn');

