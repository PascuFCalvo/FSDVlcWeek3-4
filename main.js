let easy = document.getElementById("easyButton");
let normal = document.getElementById("normalButton");
let hard = document.getElementById("hardButton");

easy = addEventListener("click",(e)=>{
   if (e.target.id === "easyButton"){
      
      window.open("./html/easy.html","_self");
   }

})

normal = addEventListener("click",(e)=>{
   if (e.target.id === "normalButton"){
      
      window.open("./html/colors.html","_self");
   }

})

hard = addEventListener("click",(e)=>{
   if (e.target.id === "hardButton"){
      console.log("hola");
      window.open("./html/hard.html","_self");
   }

})

