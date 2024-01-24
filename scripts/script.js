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
// scroll animation
// Bron: https://www.freecodecamp.org/news/scroll-animations-with-javascript-intersection-observer-api/
/****************/

const animatedElement = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove("scroll-animation");
			} else {
				entry.target.classList.add("scroll-animation");
			}
		});
	},
	{ threshold: 0.5 }
);
//
for (let i = 0; i < animatedElement.length; i++) {
	const elements = animatedElement[i];

	observer.observe(elements);
}
