"use strict"

//********************************
//*** Condición IF

var datoA = 10;
var datoB = 20;

var resultado = "Sin datos";

if (datoA > datoB) {
    resultado = "La condición se cumplió";
} else if (datoB == datoA) {
    resultado = "Segunda evaluación verdadera";
} else {
    resultado = "No se cumplió ninguna validación";
}

console.log("El resultado es: ", resultado);