let easy = document.getElementById("easyButton");
let normal = document.getElementById("normalButton")

easy = addEventListener("click",(e)=>{
   if (e.target.id === "easyButton"){
      console.log("hola");
      window.open("./html/easy.html","_self");
   }

})

easy = addEventListener("click",(e)=>{
   if (e.target.id === "normalButton"){
      console.log("hola");
      window.open("./html/normal.html","_self");
   }

})

