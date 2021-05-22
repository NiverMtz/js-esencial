"use strict"

//********************************
//*** Concatenación

var datoA = 10;
var datoB = 20;

var nombre = "Marlen";
var apellido = "Santamaría";

// CONCATENACIÓN DE NÚMEROS
var concatNumeros = datoA + datoB;
console.log('Los números '+datoA+' y '+datoB+' concatenados como números hacen una suma: '+concatNumeros);

// CONCATENACIÓN DE CADENAS DE TEXTO
var concatTexto = nombre + apellido;
console.log('Los textos '+nombre+' y '+apellido+' concatenados como texto hacen: '+concatTexto);

// CONCATENACIÓN NÚMEROS COMO TEXTO
var concatNumText = "2" + "8";
console.log('Los números 2 y 8 concatenados como texto hacen: '+concatNumText);

// CONCATENACIÓN DE TEXTO Y NÚMERO
var concatTextNum= datoA + "8";
console.log('El número ' + datoA + 'usado como número y 8 como texto hacen: '+concatTextNum);