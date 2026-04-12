import { loadFeatured } from "./featured.js";

// MENU TOGGLE
const menuBtn = document.querySelector("#menuBtn");
const navList = document.querySelector("#navList");

if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
}

// LOAD FEATURED GAMES (homepage only)
loadFeatured();

// FOOTER
const copyright = document.querySelector("#copyright");
if (copyright) {
    copyright.textContent = `© ${new Date().getFullYear()} GameVault`;
}

const lastModified = document.querySelector("#lastModified");
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}