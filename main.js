//Select h3 tag
let h3 = document.querySelector("h3");
//Select input colors
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
//Get background
let body = document.getElementById("gradient");
//Create new function for color pick
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = body.style.background + ";";
}
// Pick and set Bkground colors
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

