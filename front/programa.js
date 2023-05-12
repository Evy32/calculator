// 1. Tener una referencia al elemento del dom al que le pondremos el eventlistener

const miBoton = document.getElementById("boton");
miBoton.addEventListener('click',
    async (event)=>{
        event.preventDefault();
        const numero_1 = parseFloat(document.getElementById("num1").value);
        const numero_2 = parseFloat(document.getElementById("num2").value);
        const respuesta = await fetch('http://localhost:3000/sumar',
            {
                "method": "POST",
                "headers": {"Content-type": "aplication/json"},
                "body": JSON.stringify({numero_1, numero_2})
            }
        );
        const dato = await respuesta.json();
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML= dato;
    }
);