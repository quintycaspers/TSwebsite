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
// dark&light mode switcher
// Bron: https://www.linkedin.com/pulse/adding-dark-mode-website-using-css-custom-properties-david-kelly/
/****************/
const bodyElement = document.querySelector("body");
const root = document.querySelector(":root");
const pixarImg = document.querySelector("img");
const lightmodeButton = document.querySelector("#lightmode-button");
const darkmodeButton = document.querySelector("#darkmode-button");
const classicmodeButton = document.querySelector("#classicmode-button");
const overlayImg = document.querySelector("#overlay");

function lightMode() {
	root.removeAttribute("id");
	bodyElement.classList.remove("grayscale");
	pixarImg.src = "images/pixar_logo.png";
	overlayImg.style.display = "none";
}

function darkMode() {
	root.removeAttribute("id");
	root.id = "dark";
	pixarImg.src = "images/pixar_logo_white.png"; // Bron: https://www.deviantart.com/trustamann/art/White-Pixar-Animation-Studios-Logo-816216663
	overlayImg.style.display = "none";
}

function classicMode() {
	root.removeAttribute("id");
	root.id = "vintage";
	pixarImg.src = "images/pixar_logo.png";
	overlayImg.style.display = "block";
}

lightmodeButton.addEventListener("click", lightMode);
darkmodeButton.addEventListener("click", darkMode);
classicmodeButton.addEventListener("click", classicMode);
