let mode = document.querySelector(".light-dark-mode-icon");
let body = document.querySelector("body");
let logo = document.querySelector(".logo");
let li = document.querySelector(".linkedin");
let ig = document.querySelector(".instagram");
let gh = document.querySelector(".github");

function changeToLight () {
    mode.src = "./icons/moon-svgrepo-com-darkblue.svg";
    li.src = "./icons/icons8-linkedin-darkblue.svg";
    ig.src = "./icons/icons8-instagram-darkblue.svg";
    gh.src = "./icons/icons8-github-darkblue.svg";
    mode.setAttribute("onclick", "changeToDark()");
    body.style.backgroundColor = "rgb(206, 217, 230)";
    body.style.color = "rgb(16, 32, 47)";
    logo.style.color = "rgb(16, 32, 47)";
}

function changeToDark () {
    mode.src = "./icons/sun-svgrepo-com-lightblue.svg";
    mode.setAttribute("onclick", "(changeToLight())");
    li.src = "./icons/icons8-linkedin-lightblue.svg";
    ig.src = "./icons/icons8-instagram-lightblue.svg";
    gh.src = "./icons/icons8-github-lightblue.svg";
    body.style.backgroundColor = "rgb(16, 32, 47)";
    body.style.color = "rgb(206, 217, 230)";
    logo.style.color = "rgb(206, 217, 230)";
}