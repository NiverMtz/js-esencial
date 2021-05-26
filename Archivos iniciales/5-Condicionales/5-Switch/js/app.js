"use strict"

//********************************
//*** EStructura SWITCH

//Eval con numeros
var edad = 10;
var resultado = "";

switch (edad) {
    case 10:
        resultado = "La edad es 10 años";
        break;
    case 20:
        resultado = "La edad es 20 años";
        break;
    case 30:
        resultado = "La edad es 30 años";
        break;   
    default:
        resultado = "Ningún caso coincide";
        break;
}

console.log("Resultado edades: ", resultado);

//
var producto = "Radio";

switch (producto) {
    case "TV":
        resultado = "Producto TV";
        break;
    case "Radio":
        resultado = "Producto Radio";
        break;
    case "Computadora":
        resultado = "Producto Computadora";
        break;   
    default:
        resultado = "Ningún caso coincide";
        break;
}

console.log("Resultado productos: ", resultado);