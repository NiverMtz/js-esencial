/*************************/
//

var mensaje = "Estoy aprendiendo JS y estoy aprendiendo mucho";

var resultado;

//indexOf
// resultado  = mensaje.indexOf("aprendiendo");

//lastIndexOf
// resultado  = mensaje.lastIndexOf("aprendiendo");

//search
// resultado  = mensaje.search("aprendiendo");

//search | Expresion regular
resultado  = mensaje.search(/js/i); // in-case sensitive

console.log(resultado);

