// 1. Tener una referencia al elemento del dom al que le pondremos el eventlistener

const suma = document.getElementById("suma");
suma.addEventListener('click',
    async (event)=>{
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById("num1").value);
        const numero_2 = parseFloat(document.getElementById("num2").value);
        const respuesta = await fetch(
            'http://localhost:3000/sumar',
            {
                "method":"POST",
                "headers": {"Content-Type":"application/json"},
                "body": JSON.stringify({numero_1, numero_2})
            }
        );
        const dato = await respuesta.json();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML= dato;
    }
);
const resta = document.getElementById("resta");
resta.addEventListener('click',
    async (event)=>{
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById("num1").value);
        const numero_2 = parseFloat(document.getElementById("num2").value);
        const respuesta = await fetch(
            'http://localhost:3000/restar',
            {
                "method":"POST",
                "headers": {"Content-Type":"application/json"},
                "body": JSON.stringify({numero_1, numero_2})
            }
        );
        const dato = await respuesta.json();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML= dato;
    }
);
const mult = document.getElementById("multiplicar");
mult.addEventListener('click',
    async (event)=>{
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById("num1").value);
        const numero_2 = parseFloat(document.getElementById("num2").value);
        const respuesta = await fetch(
            'http://localhost:3000/multiplicar',
            {
                "method":"POST",
                "headers": {"Content-Type":"application/json"},
                "body": JSON.stringify({numero_1, numero_2})
            }
        );
        const dato = await respuesta.json();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML= dato;
    }
);
const div = document.getElementById("dividir");
div.addEventListener('click',
    async (event)=>{
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById("num1").value);
        const numero_2 = parseFloat(document.getElementById("num2").value);
        const respuesta = await fetch(
            'http://localhost:3000/dividir',
            {
                "method":"POST",
                "headers": {"Content-Type":"application/json"},
                "body": JSON.stringify({numero_1, numero_2})
            }
        );
        const dato = await respuesta.json();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML= dato;
    }
);
