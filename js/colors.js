let colorRow1 = document.getElementById("icolor-row1");
let colorRow2 = document.getElementById("icolor-row2");
let colorRow3 = document.getElementById("icolor-row3");
let colorRow4 = document.getElementById("icolor-row4");
let mainContainer = document.getElementById("main-container");
let colores1 = "#1B676B,#519548,#88C425,#BEF202,#EAFDE6,#D9CEB2";
let colores2 = "#F04155,#FF823A,#F2F26F,#FFF7BD,#95CFB7,#F0E2A4";
let colores3 = "#FF9900,#424242,#E9E9E9,#BCBCBC,#3299BB,#604848";
let colores4 = "#B3CC57,#ECF081,#FFBE40,#EF746F,#AB3E5B,#7CCCE5";
let colores = "";
mainContainer = addEventListener("click", (e) => {
  if (e.target.id == "icolor-row1") {
    let colores = colores1;
    localStorage.setItem("colores", colores);
    window.open("../html/normal.html", "_self");
  } else if (e.target.id == "icolor-row2") {
    window.open("../html/normal.html", "_self");
    let colores = colores2;
    localStorage.setItem("colores", colores);
  } else if (e.target.id == "icolor-row3") {
    window.open("../html/normal.html", "_self");
    let colores = colores3;
    localStorage.setItem("colores", colores);
  } else if (e.target.id == "icolor-row4") {
    window.open("../html/normal.html", "_self");
    let colores = colores4;
    localStorage.setItem("colores", colores);
  }
});
