let returnMain = document.getElementById("returnMain");
let makeTry = document.getElementById("makeTry");
let retTry = document.getElementById("retTry");
let colorPicker = document.getElementById("colorPicker");
let squarecolors = document.getElementsByClassName("color-cl");
let winCondition = [];
let winCondition2 = [];
let guessResult = [];
let generateArrayColors = [];
let contador = 0;
let guesserIndex = 0;
let currentRowToFill = 1;
let currentRow = document.getElementById(`guesser${currentRowToFill}Try`);
let colors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Pink",
  "Brown",
  "Cyan",
  "Magenta",
  "Lavender",
  "Teal",
  "Olive",
  "Maroon",
  "Navy",
  "Turquoise",
  "SlateGray",
  "Violet",
  "Indigo",
  "Gold",
  "Silver",
  "Gray",
];
let colorPickerClass = document.getElementsByClassName("color-picker");
let colorButtons = document.getElementsByClassName("color-button");
let inputnumbers = document.getElementById("inputnumbers");
let inputrows = document.getElementById("inputrows");
let buttonSend = document.getElementById("buttonSend");
let colorsToPlay = [];
let totalGameColors = 0;



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

inputrows.addEventListener("input", () => {
  totalGameRows = inputrows.value;
});
inputnumbers.addEventListener("input", () => {
  totalGameColors = inputnumbers.value;
});

buttonSend.addEventListener("click", (e) => {
 
  if ((e.target.id == "buttonSend")) {
    totalGameRows = inputrows.value;
    totalGameColors = inputnumbers.value;
    if(totalGameColors <= 12 && totalGameRows <= 12){
    generateTable();
    document.getElementById("main-container").style.display = "none";
    winCondition = shuffle(colors);
   
    winCondition2 = winCondition.slice(0, parseInt(totalGameColors) + 2);
    paintWinConditionButtons();
    paintColorPickerButtons();}else{
      console.log("error")}
    
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
  winCondition.classList.add("color-try");
  winCondition.id = "winCondition";

  let hideWinCondition = document.createElement("div");
  hideWinCondition.classList.add("hide-win-condition");
  hideWinCondition.id = "hide-win-condition";
  hideWinCondition.innerHTML = "<p>Guess my play!</p>";

  for (let i = 0; i < totalGameColors; i++) {
    let winConditionButton = document.createElement("div");
    winConditionButton.classList.add("color-button", "win-condition-button");
    winCondition.appendChild(winConditionButton);
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

  let colorPickerContainer = document.createElement("div");
  colorPickerContainer.classList.add("color-picker");

  let colorPicker = document.createElement("div");
  for (let k = 0; k < parseInt(totalGameColors) + 2; k++) {
    let colorPickerClass = document.createElement("div");
    colorPickerClass.classList.add("color-cl");
    colorPickerContainer.appendChild(colorPickerClass);
  }

  colorPicker.appendChild(colorPickerContainer);
  colorPickerContainer.appendChild(retTry);
  colorPickerContainer.appendChild(makeTry);

  let returnToMain = document.createElement("div");
  returnToMain.classList.add("return-to-main");
  returnToMain.id = "returnMain";
  returnToMain.innerHTML = "Back to main";

  mainContainer.appendChild(colorPicker);
  mainContainer.appendChild(returnToMain);

  document.body.appendChild(mainContainer);
 
}


let paintWinConditionButtons = () => {
  shuffle(winCondition);
  for (let i = 0; i < totalGameColors; i++) {
    colorButtons[i].style.backgroundColor = winCondition2[i];
  }
}

let paintColorPickerButtons = () => {
  shuffle(winCondition2);

  for (let i = 0; i < winCondition2.length; i++) {
    squarecolors[i].style.backgroundColor = winCondition2[i];
    
  } 
}

const paintTry = () => {
  colorPicker.addEventListener("click", colorPickerClick);
}

function colorPickerClick(eventoClick) {
  if (eventoClick.target.classList.contains("color-cl")) {
    let selectedColor = eventoClick.target.style.backgroundColor;

    for (let i = 0; i < totalGameColors; i++) {
      colorButtons[i].style.backgroundColor = selectedColor;
    }

    currentRowToFill++; 
  }
}






