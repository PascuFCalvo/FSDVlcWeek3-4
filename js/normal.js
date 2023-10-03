let returnMain = document.getElementById("returnMain");
let makeTry = document.getElementById("makeTry");
let retTry = document.getElementById("retTry");
let colorPicker = document.getElementById("colorPicker");
let firstTry = document.getElementById("firstTry");
let secondTry = document.getElementById("secondTry");
let thirdTry = document.getElementById("thirdTry");
let fourthTry = document.getElementById("fourthTry");
let fifthTry = document.getElementById("fifthTry");
let sixthTry = document.getElementById("sixthTry");
let guesser1 = document.getElementById("guesser1");
let guesser2 = document.getElementById("guesser2");
let guesser3 = document.getElementById("guesser3");
let guesser4 = document.getElementById("guesser4");
let guesser5 = document.getElementById("guesser5");
let guesser6 = document.getElementById("guesser6");
let cuadroscolores = document.getElementsByClassName("color-cl");
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

let colors = localStorage.getItem("colores")
let colors2 = colors.split(",")


let colors3 = colors2;

for (let i = 0; i<colors2.length; i++){
  cuadroscolores[i].style.backgroundColor = colors2[i];
  cuadroscolores[i].setAttribute("id",colors2[i])
}


returnMain = addEventListener("click", (e) => {
  if (e.target.id === "returnMain") {
    
    window.open("../index.html", "_self");
  }
});
//genera el random
function shuffle(remix) {
  let currentIndex = remix.length,
    randomIndex;
  //mientras quedan elementos restantes
  while (currentIndex > 0) {
    //eliges un elemento
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    //y los mezclas
    [remix[currentIndex], remix[randomIndex]] = [
      remix[randomIndex],
      remix[currentIndex],
    ];
  }
  
  return remix;
}

window.addEventListener("load", () => {
  winCondition = shuffle(colors2);
  winCondition = shuffle(colors2).slice(0,-2)
  paintWinConditionButtons();
  paintTry(row);
});

function paintWinConditionButtons() {
  for (let i = 0; i < 4; i++) {
    winConditionButton[i].style.backgroundColor = winCondition[i];
  }

}
const paintTry = () => {
  colorPicker.addEventListener("click", colorPickerClick);
};
function colorPickerClick(eventoClick) {
  if (
    eventoClick.target.id == colors2[0] ||
    ((eventoClick.target.id == colors2[1] ||
      eventoClick.target.id == colors2[2] ||
      eventoClick.target.id == colors2[3] ||
      eventoClick.target.id == colors2[4] ||
      eventoClick.target.id == colors2[5]) &&
      contador < 4)
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
    } else if (row === 5) {
      fifthTry.children[contador].style.backgroundColor =
        eventoClick.target.id;
      firstTry.children[contador].style.transition = "0.6s";
    } else if (row === 6) {
      sixthTry.children[contador].style.backgroundColor =
        eventoClick.target.id;
      firstTry.children[contador].style.transition = "0.6s";
    }
    winComparation.push(eventoClick.target.id);
    
    contador++;
  }
}


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
  }else if (row === 5) {
   fifthTry.children[contador - 1].style.backgroundColor = "rgba(0,0,0,0)";
   firstTry.children[contador].style.transition = "0.6s";
   }else if (row === 6) {
   sixthTry.children[contador - 1].style.backgroundColor = "rgba(0,0,0,0)";
   firstTry.children[contador].style.transition = "0.6s";
   }
  
  if (contador > 0) {

    winComparation.pop();
    contador--;
  }
}

function comparation(array1, array2) {
  
  for (let i = 0; i < array1.length ; i++) {
   if (array1[i]==array2[i]){
        guessResult.push("🟢");
  
    }else if(array1[i] != array2[i] && array1.includes(array2[i])){
      guessResult.push("🟡");
    }else if(array1[i]!=array2[i]){
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
    case 4:
      guesser5.innerHTML = winComparationGlobal[4];

      break;
    case 5:
      guesser6.innerHTML = winComparationGlobal[5];

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
    n <= 5
  ) {
    document.getElementById("main-container").style.animation = "jump 1s";
    document.getElementById("salutation").innerText = "🎉🎉YOU WIN🎉🎉";
    document.getElementById("hide-win-condition").style.display = "none";
  } else if (
    (newguessResult.includes("🔴") || newguessResult.includes("🟡")) && n >= 6)
   {
    document.getElementById("salutation").innerText = "😭😭YOU LOOSE😭😭";
    document.getElementById("main-container").style.animation = "drop 5s";
    document.getElementById("hide-win-condition").style.display = "none";
  }

  guesserIndex++;
}

retTry.addEventListener("click", (e) => {
  if (e.target.id === "retTry") {
    
    colorClear();
  }
});

makeTry.addEventListener("click", (e) => {
  if (e.target.id === "makeTry" && contador === 4) {
    comparation(winCondition, winComparation);
    guessResult = [];
    row++;
    n++;
    contador = 0;
    winComparation = [];
    paintTry(row);
  }
});
