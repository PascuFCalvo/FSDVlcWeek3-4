let squarecolors = document.getElementsByClassName("color-cl");
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
let actualRow = 0;
let index = -1;

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
    if (totalGameColors <= 8 && totalGameRows <= 8) {
      generateTable();

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
    } else {
      console.log("error");
    }
  }
});

let generateTable = () => {
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  mainContainer.id = "main-container";

  let salutation = document.createElement("div");
  salutation.classList.add("salutation");
  salutation.id = "salutation";
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

  let guesserHidden = document.createElement("div");
  guesserHidden.classList.add("guesser-hidden");

  winCondition.appendChild(hideWinCondition);
  winCondition.appendChild(guesserHidden);
  mainContainer.appendChild(winCondition);

  for (let i = totalGameRows; i > 0; i--) {
    let colorTry = document.createElement("div");
    colorTry.classList.add("color-try");
    colorTry.id = `guesser${i}Try`;

    for (let j = 0; j < parseInt(totalGameColors); j++) {
      let colorButton = document.createElement("div");
      colorButton.classList.add("color-button");
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

  let returnToMain = document.createElement("div");
  returnToMain.classList.add("return-to-main");
  returnToMain.id = "returnMain";
  returnToMain.innerHTML = "Back to main";

  mainContainer.appendChild(colorPicker);
  mainContainer.appendChild(returnToMain);

  document.body.appendChild(mainContainer);

  paintRow();
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

let paintRow = () => {
  let colorPickSquare = document.getElementsByClassName("squareColor");
  let squareToPaint = document.getElementsByClassName("color-button");

  colorPickSquare = addEventListener("click", (e) => {
    if (
      index <= winConditionResult.length - 2 &&
      e.target.style.backgroundColor
    ) {
      index++;

      squareToPaint[index].style.backgroundColor =
        e.target.style.backgroundColor;

      winComparation.push(e.target.style.backgroundColor);

      console.log(index);
    }
  });
};

let colorClear = () => {
  let squareToPaint = document.getElementsByClassName("color-button");

  if (index >= 0) {
    console.log(index);
    squareToPaint[index].style.backgroundColor = "rgba(0,0,0,0)";

    winComparation.pop();
  }
  index--;
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
  console.log(winComparationGlobal);

  let guessers = document.getElementsByClassName("guesser");
  console.log(guessers.item(0));

  guessers.item(0).innerHTML = winComparationGlobal[0];
};

makeTry = addEventListener("click", (e) => {
  if (e.target.id === "makeTry") {
    console.log("winCondition", winConditionResult);
    console.log("winComparation", winComparation);
    comparation(winConditionResult, winComparation);
    actualRow++;
  }
});

retTry = addEventListener("click", (e) => {
  if (e.target.id === "retTry") {
    colorClear();
  }
});
