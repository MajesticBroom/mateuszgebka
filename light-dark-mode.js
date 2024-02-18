let mode = document.querySelector(".light-dark-mode-icon");
let bg = document.querySelector("body");
let logo = document.querySelector(".logo");

function changeToLight () {
    mode.src = "./icons/moon-svgrepo-com-darkblue.svg";
    mode.setAttribute("onclick", "changeToDark()");
    bg.style.backgroundColor = "rgb(206, 217, 230)";
    logo.style.color = "rgb(16, 32, 47)";
}

function changeToDark () {
    mode.src = "./icons/sun-svgrepo-com-lightblue.svg";
    mode.setAttribute("onclick", "(changeToLight())");
    bg.style.backgroundColor = "rgb(16, 32, 47)";
    logo.style.color = "rgb(206, 217, 230)";
}