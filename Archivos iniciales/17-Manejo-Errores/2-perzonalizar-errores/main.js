//Manejo de errores

var valor1 = 100;
var valor2 = 200;

try {
    if (valor1 > valor2) {
        console.log(`Mensaje de validación: ${valor1} si es mayor que ${valor2}`);
    } else {
        throw new Error(`${valor1} nos es mayor que ${valor2}`);
    }
} catch(error) {
    console.log(error.message)
}