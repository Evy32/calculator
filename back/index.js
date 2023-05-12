// 1. Crear un objeto express

const express = require('express');


//2. Crear un objeto que represente la aplicacion

const app = express(); 
app.use(express.json());

// Configurar CORS

app.use( (req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-type");
    next();
});

// Definir los entry point de la API o la ruta donde va a responder la API

app.post(
    '/sumar',
    (req, res)=>{
        //let resultado;
        const {numero_1, numero_2} = req.body;
        resultado = parseFloat(numero_1) + parseFloat(numero_2) ;
        res.json(resultado);}
    
);

app.post(
    '/restar',
    (req, res)=>{
        let resultado;
        try{
        const {numero_1, numero_2} = req.body;
        resultado = numero_1 - numero_2 ;
        }catch(error){resultado = "Error!";}
    res.json(resultado);}
)
app.post(
    '/dividir',
    (req, res)=>{
        let resultado;
        try{
        const {numero_1, numero_2} = req.body;
        resultado = numero_1 / numero_2 ;
        }catch(error){resultado = "Error!";}
    res.json(resultado);})

 
//3. Crear un servicio para escuchar peticiones

app.listen(3000, ()=>{console.log("Servidor ejecutandose en el puerto 3000");});


