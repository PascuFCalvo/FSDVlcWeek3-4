let returnMain = document.getElementById("returnMain");
let makeTry = document.getElementById("makeTry");
let colorPicker = document.getElementById("colorPicker");
let firstTry = document.getElementById("firstTry");
let secondTry = document.getElementById("secondTry");
let thirdTry = document.getElementById("thirdTry");
let fourthTry = document.getElementById("fourthTry");
let colors = ["red", "goldenrod", "purple"];
let n = 1;
let winCondition = [];
let winComparation = [];
let guessResult = [];
let winConditionButton = document.getElementsByClassName(
  "win-condition-button"
);
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
  console.log("wincondition", winCondition);
  paintWinConditionButtons();
  paintTry();
});
//observer de todas las casillas
box = addEventListener("click", (e) => {
  if (e.target.classList.contains("color-button")) {
    console.log(e.target.id);
  }
});

function paintWinConditionButtons() {
  for (let i = 0; i < winConditionButton.length; i++) {
    winConditionButton[i].style.backgroundColor = winCondition[i];
  }
}

console.log(firstTry.children[1]);
console.log(secondTry.children[1]);

function paintTry() {
  if (n == 1) {
    contador = 0;
    console.log("entra a primera fila");
    colorPicker.addEventListener("click", (e) => {
      if(e.target.id){
          firstTry.children[contador].style.backgroundColor = e.target.id;
          winComparation.push(e.target.id);
    contador++;}
    
      
    });
  } else if (n == 2) {
    contador = 0
    console.log(contador);
    console.log("entra a segunda fila");
    colorPicker.addEventListener("click", (e) => {
      if(e.target.id){
        secondTry.children[contador-1].style.backgroundColor = e.target.id;
        winComparation.push(e.target.id);}
      
    });
  } else if (n == 3) {
    contador = 0;
    console.log("entra a tercera fila");
    colorPicker.addEventListener("click", (e) => {
      if(e.target.id){
      thirdTry.children[contador-5].style.backgroundColor = e.target.id;
      winComparation.push(e.target.id);}
    });
    return winComparation;
  }else if (n == 4) {
    contador = 0;

    console.log("entra a cuarta fila");
    colorPicker.addEventListener("click", (e) => {
      if(e.target.id){
      fourthTry.children[contador].style.backgroundColor = e.target.id;
      winComparation.push(e.target.id);}
    });
    return winComparation;
  }
}

function comparation(array1, array2) {
  for (let i = 0; i <= array1.length - 1; i++) {
    if (array1[i] === array2[i]) {
      guessResult.push("⚪");
    } else {
      guessResult.push("⚫");
    }
  }

  if (!guessResult.includes("⚫")) {
    alert("HAS GANAO!!!!");
   }else if(guessResult.includes("⚫") && n === 4){
     alert("ERES UN LOOSER");
  }
  return guessResult;
}

makeTry = addEventListener("click", (e) => {
  if (e.target.id === "makeTry") {
    comparation(winCondition, winComparation);
    winComparation = [];
    guessResult = [];
    n++;
    paintTry();
  }
});
