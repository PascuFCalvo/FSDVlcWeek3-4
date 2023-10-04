let easy = document.getElementById("easyButton");
let normal = document.getElementById("normalButton");
let hard = document.getElementById("hardButton");
let random = document.getElementById("randomButton")
let userName = document.getElementById('userName')
let userNamePicked = ""

userName.addEventListener('input', () => {	
   
	
   userNamePicked = userName.value;
   userName.style.backgroundColor = "rgba(255, 254, 254, 0.049)"
   userName.style.transition = ("1.5s")
   localStorage.setItem ("userName", userNamePicked)
})


easy = addEventListener("click",(e)=>{
   if (e.target.id === "easyButton"){

      if(!userNamePicked){
         console.log("NO!")
         userName.style.backgroundColor = "rgb(255, 0, 0,0.2)"
         userName.style.transition = ("1s")
         userName.innerHTML = "Pick a name"
      }else {
        window.open("./html/easy.html","_self"); 
      }
      
      
   }

})

normal = addEventListener("click",(e)=>{
   if (e.target.id === "normalButton"){
      
      if(!userNamePicked){
         console.log("NO!")
         userName.style.backgroundColor = "rgb(255, 0, 0,0.2)"
         userName.style.transition = ("1s")
         userName.innerHTML = "Pick a name"
      }else {
      window.open("./html/colors.html","_self");
   }}

})

hard = addEventListener("click",(e)=>{
   if (e.target.id === "hardButton"){
      
      if(!userNamePicked){
         console.log("NO!")
         userName.style.backgroundColor = "rgb(255, 0, 0,0.2)"
         userName.style.transition = ("1s")
         userName.innerHTML = "Pick a name"
      }else {
      window.open("./html/hard.html","_self");
   }}

})

hard = addEventListener("click",(e)=>{
   if (e.target.id === "randomButton"){
      if(!userNamePicked){
         console.log("NO!")
         userName.style.backgroundColor = "rgb(255, 0, 0,0.2)"
         userName.style.transition = ("1s")
         userName.innerHTML = "Pick a name"
      }else {
      window.open("./html/random.html","_self");
   }}

})

