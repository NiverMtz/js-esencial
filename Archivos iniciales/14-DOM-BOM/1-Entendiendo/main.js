//********************************
//*** Entendiendo el DOM y el BOM

var btn = document.getElementById("boton");

btn.addEventListener('click',function(){
    console.log(window.location.href);
    window.location.href = "http://www.google.com/";
});