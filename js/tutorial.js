let returnMain = document.getElementById("returnMain");

returnMain = addEventListener("click", (e) => {
   if (e.target.id === "returnMain") {
     window.open("../index.html", "_self");
   }
 });