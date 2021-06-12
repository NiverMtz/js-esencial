/***********************/
// For in

var platillos = ["ceviche", "tacos", "pasta"];

// var pElegido = platillos.find(platillo => platillo == "tostadas");

var menu = [
	{nombre: 'Ceviche', precio: 20, pais: 'Perú'},
	{nombre: 'Tacos', precio: 10 , pais: 'México'},
	{nombre: 'Pasta', precio: 50, pais: 'Italia'}
];

// var numPlatillo = platillos.findIndex( platillo => platillo == "tacos");

var numPlatillo = menu.findIndex( platillo => platillo.nombre == "Pasta");

console.log("Número de platillo: ", numPlatillo);