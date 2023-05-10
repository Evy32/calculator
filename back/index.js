// 1. Crear un objeto express

const express = require('express');

//2. Crear un objeto que represente la aplicacion

const app = express(); 

// Definir los entry pointde la API o la ruta donde va a responder la API

app.get(
    '/sumar',
    (req, res)=>{console.log("Alguien está conectandose a esta ruta");
    res.json("Hola");}
    
);

app.post(
    '/restar',
    (req, res)=>{
        console.log("Alguien está conectandose a esta ruta de restar");
    res.json("Hola restar");
    }
    

)
//3. Crear un servicio para escuchar peticiones

app.listen(3001, ()=>{console.log("Servidor ejecutandose en el puerto 3001");});


