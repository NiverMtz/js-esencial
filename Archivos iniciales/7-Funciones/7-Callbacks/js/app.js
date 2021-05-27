"use strict"

//********************************
//*** Callnacks

function calcular(a, b, sumarCB, restarCB) {
    var suma = a + b;
    var resta = a - b;

    sumarCB(suma);
    restarCB(resta)
}

calcular(2, 3, function(resultado){
    console.log('Suma: ', resultado);
}, function(resultado){
    console.log('Resta: ', resultado);
});