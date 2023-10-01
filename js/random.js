let returnMain = document.getElementById("returnMain");
let makeTry = document.getElementById("makeTry");
let retTry = document.getElementById("retTry");
let colorPicker = document.getElementById("colorPicker");
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
let generateArrayColors = [];
let contador = 0;
let guesserIndex = 0;
let colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#008000",
  "#800000",
  "#808080",
  "#C0C0C0",
  "#808000",
  "#008080",
  "#FF4500",
  "#FFD700",
  "#8B0000",
  "#008000",
  "#6A5ACD",
  "#FF69B4",
];
let inputnumbers = document.getElementById("inputnumbers");
let inputrows = document.getElementById("inputrows");
let buttonSend = document.getElementById("buttonSend");
let colorsToPlay = [];

returnMain = addEventListener("click", (e) => {
  if (e.target.id === "returnMain") {
    console.log("hola");
    window.open("../index.html", "_self");
  }
});

inputrows.addEventListener("input", () => {
  console.log(inputrows.value);
  totalGameRows = inputrows.value;
});
inputnumbers.addEventListener("input", () => {
  console.log(inputnumbers.value);
  totalGameColors = inputnumbers.value;
});

buttonSend.addEventListener("click", (e) => {
  console.log("entra al click");
  if ((e.target.id = "buttonSend")) {
    totalGameRows = inputrows.value;
    totalGameColors = inputnumbers.value;
    generateTable()
   ;
    
  }
});

function generateTable() {
let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
mainContainer.id = 'main-container';


let salutation = document.createElement('div');
salutation.classList.add('salutation');
salutation.id = 'salutation';
salutation.textContent = 'MASTERMIND - EASY ❤️';
mainContainer.appendChild(salutation);


let winCondition = document.createElement('div');
winCondition.classList.add('color-try');
winCondition.id = 'winCondition';


let hideWinCondition = document.createElement('div');
hideWinCondition.classList.add('hide-win-condition');
hideWinCondition.id = 'hide-win-condition';
hideWinCondition.innerHTML = '<p>Guess my play!</p>';


for (let i = 0; i < totalGameColors; i++) {
  let winConditionButton = document.createElement('div');
  winConditionButton.classList.add('color-button', 'win-condition-button');
  winCondition.appendChild(winConditionButton);
}


let guesserHidden = document.createElement('div');
guesserHidden.classList.add('guesser-hidden');


winCondition.appendChild(hideWinCondition);
winCondition.appendChild(guesserHidden);


for (let i = totalGameRows; i > 0; i--) {
  let colorTry = document.createElement('div');
  colorTry.classList.add('color-try');
  colorTry.id = `guesser${i}Try`;

  
  for (let j = 0; j < totalGameColors; j++) {
    let colorButton = document.createElement('div');
    colorButton.classList.add('color-button');
    colorTry.appendChild(colorButton);
  }

  
  let guesser = document.createElement('div');
  guesser.classList.add('guesser');
  guesser.id = `guesser${i}`;
  colorTry.appendChild(guesser);

  mainContainer.appendChild(colorTry);
}

let retTry = document.createElement('div');
retTry.classList.add('try-button');
retTry.id = 'retTry';
retTry.textContent = '🔙';

let makeTry = document.createElement('div');
makeTry.classList.add('try-button');
makeTry.id = 'makeTry';
makeTry.textContent = '✅';


let colorPicker = document.createElement('div');
colorPicker.classList.add('color-picker');
colorPicker.id = 'colorPicker';
colorPicker.appendChild(retTry);
colorPicker.appendChild(makeTry);


let returnToMain = document.createElement('div');
returnToMain.classList.add('return-to-main');
returnToMain.id = 'returnMain';
returnToMain.innerHTML ="Back to main";

mainContainer.appendChild(winCondition);
mainContainer.appendChild(colorPicker);
mainContainer.appendChild(returnToMain);


document.body.appendChild(mainContainer);
}