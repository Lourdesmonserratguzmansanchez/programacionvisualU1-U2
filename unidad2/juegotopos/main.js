const cuadro = document.querySelectorAll(".cuadro");
const tiempoFaltante = document.querySelector("#tiempo");
let puntaje = document.getElementById("puntaje");

let resultado = 0;
let tiempoActual = tiempoFaltante.textContent;
let tiempoTotal=30;

let canFondo=new Audio('snd/fondo1.mp3');

function cuadroAzar() {
    canFondo.play();
  cuadro.forEach((nombreDeClase) => {
    nombreDeClase.classList.remove("topo");
  });
  let posicionAlAzar = cuadro[Math.floor(Math.random() * 12)];
  posicionAlAzar.classList.add("topo");

  posicionTopo = posicionAlAzar.id;
}

cuadro.forEach((identificador) => {
  identificador.addEventListener("click", () => {
    if (identificador.id === posicionTopo) {
      resultado = resultado + 1;
      puntaje.textContent = resultado;
      posicionTopo = null;
    }
  });
});

function moverTopo() {
  tiempoTopo = setInterval(cuadroAzar, 500);
}

moverTopo();
function cuentaRegresiva() {
  tiempoActual--;
  tiempoFaltante.textContent = tiempoActual;

  if (tiempoActual === 0) {
    clearInterval(idTiempo);
    clearInterval(tiempoTopo);
    alert("¡¡¡  SE HA ACABADO EL TIEMPO :( !!!");
    puntaje.innerHTML=`LE PEGASTE A ${resultado} TOPOS`;
  }
}

let idTiempo = setInterval(cuentaRegresiva, 1000);
