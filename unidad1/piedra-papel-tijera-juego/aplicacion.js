const piedra = "piedra";
const papel = -"papel";
const tijera = "tijera";

const empate = 0;
const ganador = 1;
const perdedor = 2;

const piedrabt = document.getElementById("piedra");
const papelbt = document.getElementById("papel");
const tijerabt = document.getElementById("tijera");
const resultadotexto = document.getElementById("texto");
const usuarioimg = document.getElementById("usuario-img");
const maquinaimg = document.getElementById("maquina-img");

piedrabt.addEventListener("click",()=>{
   play(piedra);
});
papelbt.addEventListener("click",()=>{
   play(papel);
});
tijerabt.addEventListener("click",()=>{
   play(tijera);
});

function play(useroption){
    usuarioimg.src = "img/"+useroption+".jpg";
    };
    
    const machineoption = calculamachineoption();
const result = calcularesultado(useroption, machineoption);

maquinaimg.src = "img/"+machineoption+".jpg";

   switch (result){
       case empate:
           resultText.innerhtml = "empate";
           break;
        case ganador:
            resultText.innerhtml = "ganador";
            break;
        case perdedor:
            resultText.innerhtml = "perdedor";
            break;
                
   }

function calculamachineoption(){
    const number = Math.floor(Math.random()* 3) 
    switch (number){
        case 1:
            return piedra;
        case 2:
            return papel;
        case 3:
            return tijera;
    }
}

function calcularesultado(){
    if(useroption === machineoption) {
        return empate; 

}else if(useroption === piedra){
        if(machineoption === papel) return perdedor;
        if(machineoption === tijera) return ganador;

    }else if(useroption === papel){
        if(machineoption === tijera) return perdedor;
        if(machineoption === piedra) return ganador;

    }else if(useroption === tijera){
        if(machineoption === piedra) return perdedor;
        if(machineoption === papel) return ganador;

        
    }
}