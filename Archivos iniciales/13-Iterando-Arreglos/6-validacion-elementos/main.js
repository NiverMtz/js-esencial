/***********************/
// For in

var resultado = null;

var menu = [
	{nombre: 'Ceviche', precio: 20, pais: 'Perú'},
	{nombre: 'Tacos', precio: 10 , pais: 'México'},
	{nombre: 'Pasta', precio: 50, pais: 'Italia'},
	{nombre: 'Quesadillas', precio: 15 , pais: 'México'}
];

// resultado = menu.find(platillo => platillo.pais == 'México');

// resultado = menu.some(platillo => platillo.precio < 20);

resultado = menu.every(platillo => platillo.precio < 20);

console.log(resultado);