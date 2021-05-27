"use strict"

//********************************
//*** Multimedia

const video = document.querySelector(".bostonVideo");

video.addEventListener("ended", function() {
    alert("MENSAJE \n\n El video ha terminado");
});