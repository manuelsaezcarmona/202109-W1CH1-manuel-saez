let seconds = 150;

const timer = setInterval(()=>{
    seconds--
    // document.inerhtml bla bla bla
    if(seconds===0){
        clearInterval(timer)
        // Llamar a final de juego.
    }
},1000)

const endGame = () =>{
    clearInterval(timer)
}

let timeLeft = parseInt(display.textContent);

let timer = (username) => {
    let restOneSecond = setInterval(() => {
      timeLeft--;
      display.textContent = timeLeft;
      if (timeLeft == 0) {
        alert("Se acabó el tiempo!");
        clearInterval(restOneSecond);
        return endGame(username);
      } else if (gameFinished) {
        clearInterval(restOneSecond);
      }
    }, 1000);
  };
  

  let identificadorDeTemporizador;

function temporizadorDeRetraso() {
  identificadorDeTemporizador = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
  alert("Three seconds have elapsed.");
}

function borrarAlerta() {
  clearTimeout(identificadorDeTemporizador);
}


// Ejemplo de youtube

let contador = 1;
let timer;

function Inciaycontinua() {
    timer = setInterval(() => {
      let info = 'Num ' + contador++ +'veces';
      console.log(info);
    }, 1000);
}

function pausa(){
    clearInterval(timer);
}