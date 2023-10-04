let returnMain = document.getElementById("returnMain");
let makeTry = document.getElementById("makeTry");
let retTry = document.getElementById("retTry");
let colorPicker = document.getElementById("colorPicker");
let firstTry = document.getElementById("firstTry");
let secondTry = document.getElementById("secondTry");
let thirdTry = document.getElementById("thirdTry");
let fourthTry = document.getElementById("fourthTry");
let guesser1 = document.getElementById("guesser1");
let guesser2 = document.getElementById("guesser2");
let guesser3 = document.getElementById("guesser3");
let guesser4 = document.getElementById("guesser4");

let colors = ["red", "goldenrod", "purple"];
let row = 1;
let n = 1;
let winCondition = [];
let winComparation = [];
let winComparationGlobal = [];
let guessResult = [];
let winConditionButton = document.getElementsByClassName(
  "win-condition-button"
);
let contador = 0;
let guesserIndex = 0;

//funcion que hace que el boton retunr, te duvuelva al main
returnMain = addEventListener("click", (e) => {
  if (e.target.id === "returnMain") {
    window.open("../index.html", "_self");
  }
});
//esta funcion coge el array wincondition y lo mezcla asignandole indices random
function shuffle(WinCondition) {
  let currentIndex = WinCondition.length,
    randomIndex;
  //mientras quedan elementos restantes
  while (currentIndex > 0) {
    //eliges un elemento
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    //y los mezclas
    [WinCondition[currentIndex], WinCondition[randomIndex]] = [
      WinCondition[randomIndex],
      WinCondition[currentIndex],
    ];
  }

  return WinCondition;
}
//evento que se hace al cargar la pagina (llama a 3 funciones)
//1-genera el array winCondition (no confundir con el parametro winCondition de la funcion Shuffle)
//2-llama a la funcion que pinta la combinacion de colores(paintWinConditionButtons)
//3-inicia la funcion que te permite jugar (paintTry)
window.addEventListener("load", () => {
  winCondition = shuffle(colors);
  paintWinConditionButtons();
  paintTry(row);
});

//coge todos los elementos con la clase winConditionButton y los va itreando para darles el color de la posicion que se ha generado en winCondition
function paintWinConditionButtons() {
  for (let i = 0; i < winConditionButton.length; i++) {
    winConditionButton[i].style.backgroundColor = winCondition[i];
  }
}
//funcion que simplemente va a recibir como argumento que cuando haces click, lance la funcion colorpickerCkick
const paintTry = () => {
  colorPicker.addEventListener("click", colorPickerClick);
};

//funcion principal
// funciona cada vez que haces click, por la funcion de arriba
//si haces click (eventoClick) en cualquier sitio de la pantalla y la id de ese sitio coincide con alguna de las que le pasas como parametro...

//coge la  fila o intento (firstTry)y le va asigando a sus elemntos hijos por orden (tiene 3 childs) el id que en este caso es el color.

//le pongo un contador para asegurar que solo pinta como mucho 3 cuadros (y no me pinte otros elementos que pueda añadir despues)

function colorPickerClick(eventoClick) {
  if (
    (eventoClick.target.id == "red" ||
      (eventoClick.target.id == "goldenrod") |
        (eventoClick.target.id == "purple")) &&
    contador < 3
  ) {
    if (row === 1) {
      firstTry.children[contador].style.backgroundColor = eventoClick.target.id;
      firstTry.children[contador].style.transition = "0.6s";
    } else if (row === 2) {
      secondTry.children[contador].style.backgroundColor =
        eventoClick.target.id;
      firstTry.children[contador].style.transition = "0.6s";
    } else if (row === 3) {
      thirdTry.children[contador].style.backgroundColor = eventoClick.target.id;
      firstTry.children[contador].style.transition = "0.6s";
    } else if (row === 4) {
      fourthTry.children[contador].style.backgroundColor =
        eventoClick.target.id;
      firstTry.children[contador].style.transition = "0.6s";
    }
    winComparation.push(eventoClick.target.id);
    contador++;
  }
}

//esta hace lo mismo que la de arriba pero en vez de pintar limpia a transparente para "borrar"
//y como esta asignada al boton retroceder el contador se reduce para ir par aatras

function colorClear() {
  if (row === 1) {
    firstTry.children[contador - 1].style.backgroundColor = "rgba(0,0,0,0)";
    firstTry.children[contador].style.transition = "0.6s";
  } else if (row === 2) {
    secondTry.children[contador - 1].style.backgroundColor = "rgba(0,0,0,0)";
    firstTry.children[contador].style.transition = "0.6s";
  } else if (row === 3) {
    thirdTry.children[contador - 1].style.backgroundColor = "rgba(0,0,0,0)";
    firstTry.children[contador].style.transition = "0.6s";
  } else if (row === 4) {
    fourthTry.children[contador - 1].style.backgroundColor = "rgba(0,0,0,0)";
    firstTry.children[contador].style.transition = "0.6s";
  }

  winComparation.pop();

  if (contador > 0) {
    contador--;
  }
}

//esta funcion compara 2 arrays para ir generando el comprobador de bolitas de colores
//en cada jugada genera un array de 3 bolitas
//y conforme vas avanzando en el juego va generando un array de arrays de 3 bolitas
//y va aumentando el indice guesserIndex

//si no aciertas vibra
//si ganas da un saltito
//si pierdes se cae
//y cuando terminas desaparece el div que tapa la solucion

function comparation(array1, array2) {
  for (let i = 0; i <= array1.length - 1; i++) {
    if (array1[i] === array2[i]) {
      guessResult.push("🟢");
    } else if (array1[i] != array2[i] && array1.includes(array2[i])) {
      guessResult.push("🟡");
    } else {
      guessResult.push("🔴");
    }
    var newguessResult = guessResult.toString().replace(/,/g, "");
  }
  winComparationGlobal.push(newguessResult);
  switch (guesserIndex) {
    case 0:
      guesser1.innerHTML = winComparationGlobal[0];

      break;

    case 1:
      guesser2.innerHTML = winComparationGlobal[1];

      break;

    case 2:
      guesser3.innerHTML = winComparationGlobal[2];

      break;

    case 3:
      guesser4.innerHTML = winComparationGlobal[3];

      break;
  }

  if (newguessResult.includes("🟡")) {
    //to-do factorizar dentrod e una funcion
    document.getElementById("main-container").style.animation = "shake 0.5s";
    setTimeout(() => {
      document.getElementById("main-container").style.animation = "";
    }, 501);
  }

  if (
    !newguessResult.includes("🔴") &&
    !newguessResult.includes("🟡") &&
    n <= 4
  ) {
    document.getElementById("main-container").style.animation = "jump 1s";
    document.getElementById("salutation").innerText = "🎉🎉YOU WIN🎉🎉";
    document.getElementById("hide-win-condition").style.display = "none";
  } else if (
    newguessResult.includes("🔴") ||
    (newguessResult.includes("🟡") && n >= 4)
  ) {
    document.getElementById("salutation").innerText = "😭😭YOU LOOSE😭😭";
    document.getElementById("main-container").style.animation = "drop 10s";
    document.getElementById("hide-win-condition").style.display = "none";
  }

  guesserIndex++;
}

//este evento le dice al voton de la flechita para atras que borre llamando a color clear

retTry.addEventListener("click", (e) => {
  if (e.target.id === "retTry") {
    colorClear();
  }
});

//este evento le dice al boton de check varias cosas
//resetea guessResult a vacio para que no se genere un array de bolitas infinito
//incrementa la fila donde estas jugando en 1
//incrementa el contador n en 1 (esto creo que no vale para nada, pero ya lo comprobare)
//resetea el contaodor...contador a 0
//reseta la winComparation a [] para no hacer un array infinito
//y vuelve a llamar a la funcion de jugar PointTry, que recibe como argumento la fila en la que
//esta y asi poder ir subiendo

makeTry.addEventListener("click", (e) => {
  if (e.target.id === "makeTry" && contador === 3) {
    comparation(winCondition, winComparation);
    guessResult = [];
    row++;
    n++;
    contador = 0;
    winComparation = [];
    paintTry(row);
  }
});
