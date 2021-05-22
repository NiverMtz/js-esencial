"use strict"

// JSON => JavaScript Object Notation

var persona = {nombre: 'Marlen', description: 'bonita'};

var personas = [
    {nombre: 'Jimena', color: 'rojo'},
    {nombre: 'Victor', color: 'azul'},
    {nombre: 'OmaraM', color: "cafe"},
    persona
]

var personaJSON = JSON.stringify(persona);

var novaPersona = JSON.parse(personaJSON)

