document.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll(".grid div")
  const result = document.querySelector('#result')
  const displayCurrent1 = document.querySelector("#c-1")
  const displayCurrent2 = document.querySelector("#c-2")
  const displayjugador1 = document.querySelector(".jugador1")
  const displayjugador2 = document.querySelector(".jugador2")
  var fondo = { 
    imagenurl:"img/table.jpg" }
  let currentJugador= 1
      score1 = 0,
      score2 = 0,
      stopGame= true
  var board
  
  function confirmarFondo(){
	fondo.imagenOK = true;
	dibujarFondo();
	dibujarFichaRoja();
	dibujarFichaAmarilla();
}
function dibujarFondo(){
	var contexto = this.contexto;
	contexto.drawImage(fondo.imagen, 0,0);
}

  var initBoard = () => {
      board = new Array(6);
      for (var i = 0; i<6; i++) {
          board[i] = new Array (7);
          for(let j = 0; j < 7; j++ ) {
              board[i][j] = 0
          }
       }
      initBoard()
      for (let i = 0, assingclass = 0; i < squares.length; i++){
          squares[i].setAttribute ("id", assingclass)
          assingclass++
          if (assingclass >= 7)
              assingclass = 0
      }
      for(var i = 0; i < squares.length; i++)
             (function(index) {
                squares[i].onclick = function() {
          var Array = []
              squares.forEach(Element => {
                  if (Element.getAttribute("id") === squares [index].getAttribute("id"))
                  array.push (Element)
                  y = Element.getAttribute("id");
              }
         ,)
           if(stopgame){
              for(let rec = Array.length - 1; rec > -1; rec--){
                  if(Array[rec].classlist.contains("taken")){
                    continue
                  }else{
                      if(currentJugador === 1){
                          Array[rec].classlist.add("taken")
                          Array[rec].classlist.add("jugador1")

                          currentJugador = 2
                          displayCurrent2.classList.add("current-2")
                          displayCurrent1.classList.remove("current-1")

                          board[rec][y] = 1

                      }else if (currentJugador === 2){
                          Array[rec].classlist.add("taken")
                          Array[rec].classlist.add("jugador-2")

                          displayCurrent1.classList.add("current-1")
                          displayCurrent2.classList.remove("current-2")

                          currentJugador = 1
                          board[rec][y] = 2
                      }
                      break     
                 }
                 
              }
          }

      } (i)

   }

  )
  function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
      const square1 = squares[winningArrays[y][0]]
      const square2 = squares[winningArrays[y][1]]
      const square3 = squares[winningArrays[y][2]]
      const square4 = squares[winningArrays[y][3]]

      if (
        square1.classList.contains("jugador-1")&&
        square2.classList.contains("jugador-1") &&
        square3.classList.contains("jugador-1") &&
        square4.classList.contains("jugador-1")
      )
      {
        result.innerHTML = "¡¡jugador uno GANA !!"
      }
      if (
        square1.classList.contains("jugador-2") &&
        square2.classList.contains("jugador-2") &&
        square3.classList.contains("jugador-2") &&
        square4.classList.contains("jugador-2")
      )
      {
        result.innerHTML = "¡¡jugador dos GANA !!"
      }
    }
  }
  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')) {
        if (currentJugador == 1) {
          squares[i].classList.add('taken')
          squares[i].classList.add("jugador-1")
          currentJugador= 2
          displayCurrentJugador.innerHTML = currentJugador
        } else if (currentJugador== 2){
          squares[i].classList.add('taken')
          squares[i].classList.add("jugador-2")
          currentJugador = 1
          displayCurrentJugador.innerHTML = currentJugador        
        } 
    }
  }
  
  } 
}
})
