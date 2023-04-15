function consumoDigiapi(){

    // consumir el endpoint con fetch
    fetch('https://digimon-api.vercel.app/api/digimon/name/metalseadramon')

    // recibir la respuesta de la api y convertirla a formato JSON manipulable por JS
    .then(response => response.json())
    // recibe los datos transformados a notación JSON para ser manipulados con la sintaxis datos.propiedad
    .then(datos => {
        
        console.log('La Digiapi respondió');
        console.log(datos);

        // sacamos de los datos la propiedad name
        let nombreDigimon = datos[0].name;
        // sacamos de los datos la propiedad level
        let nivelDigimon = datos[0].level;
        // sacamos de los datos la propiedad img
        let imagenDigimon = datos[0].img;



        // introduzco una espera artificial de dos segundos 
        setTimeout(()=>{
            console.log('El nombre del digimon es: ', nombreDigimon);
            console.log('El nivel del digimon es: ', nivelDigimon);


            // manipulamos el DOM para poder enviar el nombre del digimon
            let parrafoNombre = document.getElementById('nombreDelDigimon');
            parrafoNombre.innerHTML = nombreDigimon;

            // manipulamos el DOM para poder enviar el nivel del digimon
            let parrafoNivel = document.getElementById('nivelDelDigimon');
            parrafoNivel.innerHTML = nivelDigimon;

            // manipulamos el DOM para poder enviar la imagen del digimon
            let etiquetaImagen = document.getElementById('imagenDelDigimon');
            etiquetaImagen.src = imagenDigimon;

        }, '2000');


    })
    .catch();
}
