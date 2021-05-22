"use strict"

//********************************
//*** Operadores Lógicos

var datoA = 10;
var datoB = 20;

//OPERADOR Y o AND
var and = (datoA > 10 && datoB > 10);
console.log('Resultado AND: '+and)

//OPERADOR O u OR
var or = (datoA > 10 || datoB > 10);
console.log('Resultado OR: '+or);

// OPERADOR DE NEGACIÓN o NOT
var not = !(datoA > 10);
console.log('Resultado NOT: '+not);
