/*leemos las entradas de las opciones */
const piedraOpcion = document.getElementById("piedra");
const  papelOpcion= document.getElementById("papel");
const tijeraOpcion = document.getElementById("tijera");
const resultado = document.getElementById("resultado");
piedraOpcion.addEventListener("click", () => {
        iniciarJuego("piedra" );
    });

papelOpcion.addEventListener("click", () =>{
    iniciarJuego("papel");
});

tijeraOpcion.addEventListener("click", () =>{
    iniciarJuego("tijera");
});

function iniciarJuego(opcion){
    //moviminto del ordenador
    const movconsol = consola();
    //movimiento usuario
    const usuario = opcion;
    //comparacion de movimiento
    const comp = compracion(movconsol, usuario);
    //resultado
    if (comp ==1) {
        resultado.innerHTML = "ELEGISTE  "+ usuario + "<br> ELECCION DEL CONTRINCANTE "+ movconsol+ "<br> <span class='ganador'> MUY BIEN GANASTE </span>";
    }
    if (comp ==2) {
        resultado.innerHTML = " ELEGISTE "+usuario + "<br> ELECCION DEL CONTRINCANTE "+ movconsol+ "<br> <span class='perdedor'>UPS QUE TRISTE PERDISTE, SUERTE PARA LA PROXIMA</span>";
    }
    if (comp ==3) {
        resultado.innerHTML = " ELEGISTE " + usuario + "<br> ELECCION DEL CONTRINCANTE "+ movconsol + "<br> <span class='empate'> ESTO ES UN EMPATE </span>";
    }
}

function consola(){
    const opciones = ['piedra', 'papel', 'tijera'];
    const random = Math.floor(Math.random()*3);
    const movimiento = opciones[random];
    return (movimiento);
}

function compracion(consola, usuario){
    switch (usuario+consola){
        case 'piedratijera':
        case 'papelpiedra':
        case 'tijerapapel':
            return 1; //gana
        case 'tijerapiedra':
        case 'piedrapapel':
        case 'papeltijera':
            return 2; //pierde
        case 'papelpapel':
        case 'piedrapiedra':
        case 'tijeatijera':
            return 3; //empata
    }
}
