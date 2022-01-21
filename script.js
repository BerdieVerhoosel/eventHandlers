let button = document.getElementById("mybutton");

button.onclick = function () {
    alert("Button Clicked");
    console.log("Hij doet het");
}

let buttonBG = document.getElementById("mybuttonBG");
let bodyRedBG = document.getElementById("backgroundColor");

buttonBG.addEventListener("click", function () {
    bodyRedBG.classList.toggle("red-background");
})

