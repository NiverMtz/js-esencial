"use strict"

/*Se recomienda utlizar var para
variables globales */
var nombre = "Marlen";

console.log(nombre);

/*Y let para variables locales*/
function saludo() {
    let nombre = "Marlen te quiero"
    console.log(nombre);

    let edad = 34; //Esta varible sólo existe en este contexto
    console.log(edad);
}

saludo();