"use strict"

//********************************
//*** Condiciones Anidadas

var datoA = 110;
var datoB = 20;
var datoC = 5;
var resultado = "Sin datos";

if (datoA > datoB) {
    resultado = "La condición se cumplió";
    if (datoC < datoB) {
        resultado = "La condición anidada se cumplió";
    } else {
        resultado = "No se cumplió la condición anidada";
    }    
} else {
    resultado = "No se cumplió ninguna validación";
}

console.log("El resultado es: ", resultado);