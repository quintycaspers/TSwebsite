/****************/
// dark/light mode switcher & theme switcher
// Bron: https://www.linkedin.com/pulse/adding-dark-mode-website-using-css-custom-properties-david-kelly/
/****************/
const bodyElement = document.querySelector("body");
const root = document.querySelector(":root");

const pixarImg = document.querySelector("img");
const overlayImg = document.getElementById("overlay");
const parallaxImg = document.getElementById("parallax-image");

const lightmodeButton = document.getElementById("lightmode-button");
const darkmodeButton = document.getElementById("darkmode-button");
const classicmodeButton = document.getElementById("classicmode-button");
const christmasmodeButton = document.getElementById("christmasmode-button");

function lightMode() {
	root.removeAttribute("id");
	pixarImg.src = "images/pixar_logo.png";
	parallaxImg.src = "images/cars_parallax_copy.png";
	overlayImg.style.display = "none";
}

function darkMode() {
	root.removeAttribute("id");
	root.id = "dark";
	pixarImg.src = "images/pixar_logo_white.png"; // Bron: https://www.deviantart.com/trustamann/art/White-Pixar-Animation-Studios-Logo-816216663
	parallaxImg.src = "images/cars_parallax_copy.png";
	overlayImg.style.display = "none";
}

function classicMode() {
	root.removeAttribute("id");
	root.id = "vintage";
	pixarImg.src = "images/pixar_logo.png";
	parallaxImg.src = "images/cars_parallax_copy.png";
	overlayImg.style.display = "block";
}

function christmasMode() {
	root.removeAttribute("id");
	root.id = "christmas";
	pixarImg.src = "images/pixar_logo_white.png";
	parallaxImg.src = "images/christmas.jpeg"; //Bron: https://www.deviantart.com/lightningmcqueen2017/art/Disney-Cars-Lightning-McQueen-and-Mater-Christmas-864287699
	overlayImg.style.display = "none";
}

lightmodeButton.addEventListener("click", lightMode);
darkmodeButton.addEventListener("click", darkMode);
classicmodeButton.addEventListener("click", classicMode);
christmasmodeButton.addEventListener("click", christmasMode);

/****************/
//audio
//Bron: https://stackoverflow.com/questions/9419263/how-to-play-audio
/****************/
const kachowButton = document.getElementById("kachow-audio");
const materButton = document.getElementById("mater-audio");
const sallyButton = document.getElementById("sally-audio");
const docButton = document.getElementById("doc-audio");

const kachowAudio = new Audio("audio/kachow.mp3"); // Bron: https://www.youtube.com/watch?v=cPwLD8qsunQ
const materAudio = new Audio("audio/mater.mp3"); // Bron: https://www.youtube.com/watch?v=9ucVi5ffP8A
const sallyAudio = new Audio("audio/sally.mp3"); // Bron: https://www.youtube.com/watch?v=ZV9Z_AcsXlU&list=PLjnjB1Z6t-kXz0NNCmqdXGyeU4B_nZHNg&index=1
const docAudio = new Audio("audio/hudson.mp3"); // Bron: https://www.youtube.com/watch?v=klesyiesuUU

function playKachowAudio() {
	kachowAudio.play();
}

function playMaterAudio() {
	materAudio.play();
}

function playSallyAudio() {
	sallyAudio.play();
}

function playDocAudio() {
	docAudio.play();
}

kachowButton.addEventListener("click", playKachowAudio);
materButton.addEventListener("click", playMaterAudio);
sallyButton.addEventListener("click", playSallyAudio);
docButton.addEventListener("click", playDocAudio);
