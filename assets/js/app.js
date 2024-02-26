let cantJuegos = +prompt("¿Cuantas veces deseas jugar? Ingrese número entero");
let aciertosJugador = 0;
let aciertosMaquina = 0;


while (isNaN(cantJuegos)) {
    cantJuegos = +prompt("¿Cuantas veces deseas jugar? Recuerda Ingresar un número entero :) ");
}

for (i = 1; i <= cantJuegos; i++) {

    let elecciónUsuario = +prompt(`
        CA-CHI-PÚN JUEGO N°${i}
        SELECCIONE SU OPCIÓN:
            1. Piedra ✊
            2. Papel ✋
            3. Tijera ✌️
        Elige con sabiduria, la 💻 es inteligente y lee 🧠.
    `);

    if (isNaN(elecciónUsuario) || elecciónUsuario >= 4) {
        elecciónUsuario = +prompt(`
        
        ELECCIÓN NO VÁLIDA 👀👀, RECUERDA QUE SOLO TIENES 3 OPCIONES POSIBLES.

        CA-CHI-PÚN JUEGO N°${i}
        SELECCIONE SU OPCIÓN:
            1. Piedra ✊
            2. Papel ✋
            3. Tijera ✌️

    `);
    }


    let eleccionMaquina = Math.floor(Math.random()*3);

    switch(eleccionMaquina){
        case 0:
            emogi = "✊";
            break;
        case 1:
            emogi = "✋";
            break;
        case 2:
            emogi = "✌️";
            break;
        default:
            emogi = "💀";
            break;
    }

    if(elecciónUsuario === eleccionMaquina){
        alert(`
            ES UN EMPATE 👀😧
            TÚ Y LA MAQUINA ESCOGIERÓN LA MISMA OPCIÓN
            HABIA UN INCREIBLE PROBABILIDAD DE 1/3 PARA QUE OCURRIERA TREMENDO ACONTECIMIENTO 🙌
        `)

        aciertosJugador++;
        aciertosMaquina++;

    }else if(elecciónUsuario > eleccionMaquina){
        alert(`
        FELICITACIONES 🎉🎉🎉
        GANASTE ESTE JUEGO, LO ANOTARE EN LA TABLA DE RECORS 🗒️.
        POR SI TE LO PREGUNTAS LA MAQUINA ESCOGIO: ${emogi}
        `)

        aciertosJugador++;

    }else if(elecciónUsuario < eleccionMaquina){
        alert(`
        OH! LA MAQUINA A GANADO 🤖😁
        NO TE PREOCUPES PUEDES SEGUIR INTENTANDOLO 😉.
        POR SI TE LO PREGUNTAS LA MAQUINA ESCOGIO: ${emogi}
        `)

        aciertosMaquina++;
    }

}


document.write(`<h3 style="text-align:center; color: white;">  🏁 RESUMEN DE LA PARTIDA 🏁:</h3>`);
document.write(`<h4 style="text-align:center; color: white; font-size: 140px; margin: 0;">  ${aciertosJugador}/${aciertosMaquina}</h4>`)

if(aciertosJugador > aciertosMaquina){
    document.write(`<h4 style="text-align:center; color: green; font-size: 60px; margin: 0; text-transform: uppercase;"> 🏆🏆🏆 Felicidades, superaste a la maquina eres un campeón!! 🏆🏆🏆</h4>`)
}else if(aciertosJugador === aciertosMaquina){
    document.write(`<h4 style="text-align:center; color: brown; font-size: 60px; margin: 0;text-transform: uppercase;"> 😧😧😧 Obtuviste el mismo resultado que la maquina, ¡Que clase de brujeria es esta! 👻🎃 </h4>`)
}else if(aciertosJugador < aciertosMaquina){
    document.write(`<h4 style="text-align:center; color: red; font-size: 60px; margin: 0;text-transform: uppercase;"> 😧😧😧 La Maquina supero tu intuición, llega a dar miedo 😶. Bueno mientras no supere a CHATGPT, todo bien ! 😏 </h4>`)
}
