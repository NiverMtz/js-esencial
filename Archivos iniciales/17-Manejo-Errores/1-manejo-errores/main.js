//Manejo de errores

try {
    // var array = new Array(100000000000000000000000000);
    // var x= y;
    decodeURIComponent('http://%dominio.com')
} catch(error) {
    console.log(error.message)
    console.log(error.name)
}