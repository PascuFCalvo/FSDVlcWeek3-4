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
  paintTry(row);
  });
function paintWinConditionButtons() {
  for (let i = 0; i < winConditionButton.length; i++) {
    winConditionButton[i].style.backgroundColor = winCondition[i];
  }
}
const paintTry = () => {
  colorPicker.addEventListener("click", colorPickerClick);
};
function colorPickerClick(eventoClick) {
  if (
    (eventoClick.target.id == "red" ||
      (eventoClick.target.id == "goldenrod") |
        (eventoClick.target.id == "purple")) &&
    contador < 3
  ) {
    if (row === 1) {
      firstTry.children[contador].style.backgroundColor = eventoClick.target.id;
    } else if (row === 2) {
      secondTry.children[contador].style.backgroundColor =
        eventoClick.target.id;
    } else if (row === 3) {
      thirdTry.children[contador].style.backgroundColor = eventoClick.target.id;
    } else if (row === 4) {
      fourthTry.children[contador].style.backgroundColor =
        eventoClick.target.id;
    }
    winComparation.push(eventoClick.target.id);
    contador++;
  }
}

function colorClear() {
  
    console.log("entra")
    if (row === 1) {
      firstTry.children[contador-1].style.backgroundColor = "rgba(0,0,0,0)"
    } else if (row === 2) {
      secondTry.children[contador-1].style.backgroundColor = "rgba(0,0,0,0)"
    } else if (row === 3) {
      thirdTry.children[contador-1].style.backgroundColor = "rgba(0,0,0,0)"
    } else if (row === 4) {
      fourthTry.children[contador-1].style.backgroundColor =
      "rgba(0,0,0,0)"
    }
    
    if(contador>0){
      contador--;
    }
    
  }




function comparation(array1, array2) {
  for (let i = 0; i <= array1.length - 1; i++) {
    if (array1[i] === array2[i]) {
      guessResult.push("🟢");
    }else if (array1[i] != array2[i] && array1.includes(array2[i])){
      guessResult.push("🟡");
    }else {
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

  if (newguessResult.includes("🟡")){
    //to-do factorizar dentrod e una funcion
    document.getElementById("main-container").style.animation="shake 0.5s";
    setTimeout(()=>{
      document.getElementById("main-container").style.animation=""
    },501)
  }
  
  if (!newguessResult.includes("🔴") && !newguessResult.includes("🟡") && n <= 4) {
    
    document.getElementById("main-container").style.animation="jump 1s";
    document.getElementById("salutation").innerText = "🎉🎉YOU WIN🎉🎉"
    document.getElementById("hide-win-condition").style.display = "none"
    
  } else if (newguessResult.includes("🔴") || newguessResult.includes("🟡") && n >= 4) {
    document.getElementById("salutation").innerText = "😭😭YOU LOOSE😭😭"
    document.getElementById("main-container").style.animation="drop 10s";
    document.getElementById("hide-win-condition").style.display = "none"
  }

  guesserIndex++;
  
}

retTry.addEventListener("click",(e)=>{
  if(e.target.id === "retTry"){
    console.log(contador)
    colorClear();
  }
})

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
