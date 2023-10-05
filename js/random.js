let squarecolors = document.getElementsByClassName("color-cl");
let returnMain = document.getElementById("returnMain");
let playagain = document.getElementById("play-again");
let userName = localStorage.getItem("userName");
let inputrows = document.getElementById("inputrows");
let inputnumbers = document.getElementById("inputnumbers");
let currentRowToFill = 1;
let colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "brown",
  "cyan",
  "magenta",
  "lavender",
  "teal",
  "olive",
  "maroon",
  "navy",
  "turquoise",
  "slategray",
  "violet",
  "indigo",
  "gold",
  "silver",
  "gray",
];
let colorButtons = document.getElementsByClassName("color-button");
let winComparation = [];
let winComparationGlobal = [];
let guessResult = [];
let rowIndex;
let index = 0;
let n = 1;
let getAllRows = [];
let guesserIndex = 0;
function shuffle(remix) {
  let currentIndex = remix.length,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [remix[currentIndex], remix[randomIndex]] = [
      remix[randomIndex],
      remix[currentIndex],
    ];
  }
  return remix;
}

returnMain = addEventListener("click", (e) => {
  if (e.target.id === "returnMain") {
    window.open("../index.html", "_self");
  }
});

playagain = addEventListener("click", (e) => {
  if (e.target.id === "play-again") {
    window.open("./random.html", "_self");
  }
});


inputrows.addEventListener("input", () => {
  totalGameRows = inputrows.value;
});
inputnumbers.addEventListener("input", () => {
  totalGameColors = inputnumbers.value;
});
buttonSend.addEventListener("click", (e) => {
  if (e.target.id == "buttonSend") {
    totalGameRows = inputrows.value;
    totalGameColors = inputnumbers.value;
    rowIndex = totalGameRows - 1;
    
    if(((totalGameRows > 8 || totalGameRows < 0)) && (totalGameColors > 8 || totalGameColors < 0)) {
      document.getElementById("inputrows").style.backgroundColor = "rgb(255, 0, 0,0.2)"
      document.getElementById("inputrows").style.transition = ("1.5s")

      document.getElementById("inputnumbers").style.backgroundColor = "rgb(255, 0, 0,0.2)"
      document.getElementById("inputnumbers").style.transition = ("1.5s")
      
    }else if(inputrows.value === "" && inputnumbers.value === ""){

      document.getElementById("inputrows").style.backgroundColor = "rgb(255, 0, 0,0.2)"
      document.getElementById("inputrows").style.transition = ("1.5s")

      document.getElementById("inputnumbers").style.backgroundColor = "rgb(255, 0, 0,0.2)"
      document.getElementById("inputnumbers").style.transition = ("1.5s")

    }
    
    else if (inputrows.value ===""){
      document.getElementById("inputrows").style.backgroundColor = "rgb(255, 0, 0,0.2)"
      document.getElementById("inputrows").style.transition = ("1.5s")

      document.getElementById("inputnumbers").style.backgroundColor = "rgba(255, 254, 254, 0.049)"
      document.getElementById("inputnumbers").style.transition = ("1.5s")

    }else if (inputnumbers.value == ""){
      document.getElementById("inputnumbers").style.backgroundColor = "rgb(255, 0, 0,0.2)"
      document.getElementById("inputnumbers").style.transition = ("1.5s")

      document.getElementById("inputrows").style.backgroundColor = "rgba(255, 254, 254, 0.049)"
      document.getElementById("inputrows").style.transition = ("1.5s")

    }
     else if(totalGameColors > 8 || totalGameColors < 0){
      document.getElementById("inputnumbers").style.backgroundColor = "rgb(255, 0, 0,0.2)"
      document.getElementById("inputnumbers").style.transition = ("1.5s")

      document.getElementById("inputrows").style.backgroundColor = "rgba(255, 254, 254, 0.049)"
      document.getElementById("inputrows").style.transition = ("1.5s")

    } else if((totalGameRows > 8 || totalGameRows < 0)){
      document.getElementById("inputrows").style.backgroundColor = "rgb(255, 0, 0,0.2)"
      document.getElementById("inputrows").style.transition = ("1.5s")

      document.getElementById("inputnumbers").style.backgroundColor = "rgba(255, 254, 254, 0.049)"
      document.getElementById("inputnumbers").style.transition = ("1.5s")
    }else if(totalGameColors >= 6 && totalGameRows >=6 ) {
      document.getElementById("body").style.transform = "scale(0.8)"
      generateTable();
      paintRow();
      document.getElementById("main-container").style.display = "none";
      winConditionComplete = shuffle(colors);
      winConditionPickColors = winConditionComplete.slice(
        0,
        parseInt(totalGameColors) + 2
      );
      winConditionResult = shuffle(
        winConditionPickColors.slice(0, parseInt(totalGameColors))
      );
      paintWinCondition();
      paintSquareColors();
    }else if(totalGameColors <= 8 && totalGameRows <= 8) {
      generateTable();
      paintRow();
      document.getElementById("main-container").style.display = "none";
      winConditionComplete = shuffle(colors);
      winConditionPickColors = winConditionComplete.slice(
        0,
        parseInt(totalGameColors) + 2
      );
      winConditionResult = shuffle(
        winConditionPickColors.slice(0, parseInt(totalGameColors))
      );
      paintWinCondition();
      paintSquareColors();
    }

    }
  }
);
let generateTable = () => {
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container" , "main-container-2");
  mainContainer.id = "main-container";
  mainContainer.id = "main-container-2";
  let salutation = document.createElement("div");
  salutation.classList.add("salutation");
  salutation.id = "salutation-2";
  salutation.textContent = "MASTERMIND - RANDOM";
  mainContainer.appendChild(salutation);
  let winCondition = document.createElement("div");
  winCondition.classList.add("winConditionRow");
  winCondition.id = "winCondition";
  let hideWinCondition = document.createElement("div");
  hideWinCondition.classList.add("hide-win-condition");
  hideWinCondition.id = "hide-win-condition";
  hideWinCondition.innerHTML = "<p>Guess my play!</p>";
  for (let i = 0; i < totalGameColors; i++) {
    let winConditionSquare = document.createElement("div");
    winConditionSquare.classList.add("winConditionSquare");
    winCondition.appendChild(winConditionSquare);
  }
  winCondition.appendChild(hideWinCondition);
  mainContainer.appendChild(winCondition);
  for (let i = totalGameRows; i > 0; i--) {
    let colorTry = document.createElement("div");
    colorTry.classList.add("colortry" + i, "color-try", "row");
    colorTry.id = `guesser${i}Try`;
    for (let j = 0; j < parseInt(totalGameColors); j++) {
      let colorButton = document.createElement("div");
      colorButton.classList.add("color-button");
      colorTry.id = `Button${i}`;
      colorTry.appendChild(colorButton);
    }
    let guesser = document.createElement("div");
    guesser.classList.add("guesser");
    guesser.id = `guesser${i}`;
    colorTry.appendChild(guesser);
    mainContainer.appendChild(colorTry);
  }
  let retTry = document.createElement("div");
  retTry.classList.add("try-button");
  retTry.id = "retTry";
  retTry.textContent = "🔙";
  let makeTry = document.createElement("div");
  makeTry.classList.add("try-button");
  makeTry.id = "makeTry";
  makeTry.textContent = "✅";
  let colorPicker = document.createElement("div");
  for (let k = 0; k < parseInt(totalGameColors) + 2; k++) {
    let colorPickerClass = document.createElement("div");
    colorPicker.setAttribute("id", "colorPicker");
    colorPickerClass.classList.add("squareColor");
    colorPickerClass.setAttribute("id", `squareColor${k}`);
    colorPicker.appendChild(colorPickerClass);
  }
  colorPicker.appendChild(retTry);
  colorPicker.appendChild(makeTry);

  let playagain = document.createElement("div");
  playagain.classList.add("play-again");
  playagain.id = "play-again";
  playagain.innerHTML = "Play again";

  let returnToMain = document.createElement("div");
  returnToMain.classList.add("return-to-main");
  returnToMain.id = "returnMain";
  returnToMain.innerHTML = "Back to main";

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");
  buttons.id = "buttons"

  buttons.appendChild(returnToMain);  
  buttons.appendChild(playagain);

  mainContainer.appendChild(colorPicker);
  mainContainer.appendChild(buttons)
  
  document.body.appendChild(mainContainer);
  getAllRows = document.getElementsByClassName("row");
};
let paintWinCondition = () => {
  let winConditionSquare =
    document.getElementsByClassName("winConditionSquare");
  for (let index = 0; index < winConditionResult.length; index++) {
    winConditionSquare.item(index).style.backgroundColor =
      winConditionResult[index];
  }
  return winConditionSquare;
};
let paintSquareColors = () => {
  let colorPickSquare = document.getElementsByClassName("squareColor");
  for (let index = 0; index < winConditionPickColors.length; index++) {
    colorPickSquare.item(index).style.backgroundColor =
      winConditionPickColors[index];
  }
  return colorPickSquare;
};
//comment to commit

//estas dos funciones han ido mutando y al final es magia chatgpt porque no tenia manera de eliminar un mane
//jador de eventos
let paintRow = () => {
  if (getAllRows.item(rowIndex) && rowIndex >= 0) {
    colorPickSquare = document.getElementsByClassName("squareColor");
    for (let i = 0; i < colorPickSquare.length; i++) {
      const square = colorPickSquare[i];
      square.removeEventListener("click", clickHandler); // Eliminar el manejador anterior si existe
      square.addEventListener("click", clickHandler); // Agregar un nuevo manejador
    }
  }
};
function clickHandler(e) {
  if (
    index <= winConditionResult.length - 1 &&
    e.target.style.backgroundColor
  ) {
    getAllRows.item(rowIndex).children[index].style.backgroundColor =
      e.target.style.backgroundColor;
    index++;
    winComparation.push(e.target.style.backgroundColor);
  }
}
let colorClear = () => {
  if (index >= 0) {
    index--;
    getAllRows.item(rowIndex).children[index].style.backgroundColor =
      "rgba(0,0,0,0)";
    winComparation.pop();
  }
};
let comparation = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      guessResult.push("🟢");
    } else if (array1[i] != array2[i] && array1.includes(array2[i])) {
      guessResult.push("🟡");
    } else if (array1[i] != array2[i]) {
      guessResult.push("🔴");
    }
    var newguessResult = guessResult.toString().replace(/,/g, "");
  }
  winComparationGlobal.push(newguessResult);
  let guessers = document.getElementsByClassName("guesser");
  guessers.item(rowIndex).innerHTML = winComparationGlobal[guesserIndex];

  if (newguessResult.includes("🟡")||newguessResult.includes("🔴")) {
    
    document.getElementById("main-container-2").style.animation = "shake 0.5s";
    setTimeout(() => {
      document.getElementById("main-container-2").style.animation = "";
    }, 501);
  }
  if (
    !newguessResult.includes("🔴") &&
    !newguessResult.includes("🟡") &&
    n <= totalGameRows
  ) {
    document.getElementById("main-container-2").style.animation = "jump 1s";
    document.getElementById("salutation-2").innerHTML = `🎉🎉${userName} YOU WIN🎉🎉`
    document.getElementById("hide-win-condition").style.display = "none";
  } else if (
    (newguessResult.includes("🔴") || newguessResult.includes("🟡")) &&
    n >= totalGameRows
  ) {
    document.getElementById("salutation-2").innerHTML = `😭😭${userName} YOU LOOSE😭😭`;
    document.getElementById("main-container-2").style.animation = "drop 5s";
    document.getElementById("hide-win-condition").style.display = "none";
  }
};


makeTry = addEventListener("click", (e) => {
  if (e.target.id === "makeTry" && index == totalGameColors) {
    console.log("rowIndex", rowIndex);
    comparation(winConditionResult, winComparation);
    n++;
    rowIndex--;
    guesserIndex++;
    index = 0;
    guessResult = [];
    winComparation = [];
    paintRow();
  }
});
retTry = addEventListener("click", (e) => {
  if (e.target.id === "retTry") {
    colorClear();
  }
});
