"use strict"

//********************************
//*** THIS

const boton = document.querySelector('.boton');

/*boton.addEventListener('click', function() {
    console.log(this.innerHTML);
})*/

boton.addEventListener('click', () => {
    console.log(this)
    this.location = "http://www.google.com";
})