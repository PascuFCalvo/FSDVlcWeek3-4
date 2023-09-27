let returnMain = document.getElementById("returnMain");
let makeTry = document.getElementById("makeTry");
let colorPicker = document.getElementById("colorPicker");
let firstTry = document.getElementById("firstTry");
let secondTry = document.getElementById("secondTry");
let thirdTry = document.getElementById("thirdTry");
let fourthTry = document.getElementById("fourthTry");
let guesser = document.getElementById("guesser");
let colors = ["red", "goldenrod", "purple"];
let fila = 1;
let n = 1;
let winCondition = [];
let winComparation = [];
let guessResult = [];
let winConditionButton = document.getElementsByClassName("win-condition-button");
let contador = 0;

returnMain = addEventListener("click", (e) => {
  if (e.target.id === "returnMain") {
    console.log("hola");
    window.open("../index.html", "_self");
  }
});
//genera el random
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
//genera el array de winCondition al arrancar
window.addEventListener("load", () => {
  winCondition = shuffle(colors);
  paintWinConditionButtons();
  paintTry(fila);
});

function paintWinConditionButtons() {
  for (let i = 0; i < winConditionButton.length; i++) {
    winConditionButton[i].style.backgroundColor = winCondition[i];
  }
}

const paintTry = () => {
  colorPicker.addEventListener("click", colorPickerClickHandler);
};

function colorPickerClickHandler(eventoClick) {
  if (eventoClick.target.id && contador < 3) {
    if (fila === 1) {
      firstTry.children[contador].style.backgroundColor = eventoClick.target.id;
    } else if (fila === 2) {
      secondTry.children[contador].style.backgroundColor = eventoClick.target.id;
    } else if (fila === 3) {
      thirdTry.children[contador].style.backgroundColor = eventoClick.target.id;
    } else if (fila === 4) {
      fourthTry.children[contador].style.backgroundColor = eventoClick.target.id;
    }
    winComparation.push(eventoClick.target.id);
    contador++;
  }
}

function comparation(array1, array2) {
  for (let i = 0; i <= array1.length - 1; i++) {
    if (array1[i] === array2[i]) {
      guessResult.push("⚪");
    } else {
      guessResult.push("⚫");
    }
    var newguessResult = guessResult.toString().replace(/,/g, "");

    guesser.innerText = newguessResult;
  }

  if (!newguessResult.includes("⚫") && n < 4) {
    alert("HAS GANAO!!!!");
  } else if (newguessResult.includes("⚫") && n >= 4) {
    alert("ERES UN LOOSER");
  }
}


makeTry.addEventListener("click", (e) => {
  if (e.target.id === "makeTry" && contador === 3) {
    comparation(winCondition, winComparation);
    guessResult = [];
    fila++;
    n++;
    contador = 0;
    winComparation = [];
    paintTry(fila);
  }
});