/****************/
// hamburger menu
/****************/

const hamburgerButton = document.querySelector("nav button");
const navList = document.querySelector("nav ul");

hamburgerButton.addEventListener("click", toggleMenu);
function toggleMenu() {
	if (navList.classList.contains("menu-closed")) {
		console.log("open");
		navList.classList.add("menu-open");
		navList.classList.remove("menu-closed");
	} else if (navList.classList.contains("menu-open")) {
		console.log("closed");
		navList.classList.add("menu-closed");
		navList.classList.remove("menu-open");
	}
}

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
	parallaxImg.src = "images/christmas.jpeg";
	overlayImg.style.display = "none";
}

lightmodeButton.addEventListener("click", lightMode);
darkmodeButton.addEventListener("click", darkMode);
classicmodeButton.addEventListener("click", classicMode);
christmasmodeButton.addEventListener("click", christmasMode);
