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
    }

    else if (navList.classList.contains("menu-open")) {
        console.log("closed");
        navList.classList.add("menu-closed");
        navList.classList.remove("menu-open");
    }
}

