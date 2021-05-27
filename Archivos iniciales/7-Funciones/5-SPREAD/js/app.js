"use strict"

//********************************
//*** SPREAD

function cocinar(ing1, ing2, ing3, ...otros) {
    console.log('Ing1: ', ing1);
    console.log('Ing2: ', ing2);
    console.log('Ing3: ', ing3);
    console.log('Otros: ', otros);
}

var ingPr = ["Arroz", "Pollo"]

cocinar(...ingPr, "Agua", "Pescado", "Chile");