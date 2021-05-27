"use strict"

//********************************
//*** Parametros de Funciones

function saludar(nombre, edad) {
    console.log("Hola ", nombre);
    console.log("Edad: ", edad);
    var resultado = nombre + " tiene " + edad + " años";
    return resultado;
}

var mensaje = saludar("Lalo", 35);
console.log(mensaje);