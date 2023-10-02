
let squarecolors = document.getElementsByClassName("color-cl");
let currentRowToFill = 1;
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
let colorButtons = document.getElementsByClassName("color-button");

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
 
  if ((e.target.id == "buttonSend")) {
    totalGameRows = inputrows.value;
    totalGameColors = inputnumbers.value;
    if(totalGameColors <= 8 && totalGameRows <= 8){

    generateTable();
    selectColor = document.getElementsByClassName("color-cl")
   
    document.getElementById("main-container").style.display = "none";

    winConditionComplete = shuffle(colors);
    winConditionPickColors= winConditionComplete.slice(0, parseInt(totalGameColors) + 2);
    winConditionResult = winConditionPickColors.slice(0,4)
    

    console.log(winConditionComplete)
    console.log(winConditionResult)
    console.log(winConditionPickColors)

  }else{console.log("error")}
    
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
    colorPicker.setAttribute("id", "colorPicker")
    colorPickerClass.classList.add("squareColor");
    colorPickerClass.setAttribute("id", `squareColor${k}`)
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

 
}





