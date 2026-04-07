//menu btn//
const hamBtn = document.getElementById("ham-btn");
const nav = document.getElementById("nav");
const hamLabel = document.getElementById("ham-label");

if (hamBtn && nav) {
    hamBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
        hamBtn.classList.toggle("show");

        if (hamBtn.classList.contains("show")) {
            hamLabel.textContent = "Close";
        } else {
            hamLabel.textContent = "Menu";
        }
    });
}

//footer
document.getElementById("lastModified").textContent =
    "Last Updated: " + document.lastModified;

document.getElementById("copyright").textContent =
    "© " + new Date().getFullYear() + " Nairobi Chamber";

const container = document.getElementById("cards-container");

places.forEach((place) => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="Image of ${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

    container.appendChild(card);
});


import { places } from "../data/place.mjs";
/* Visit Message */
const messageBox = document.getElementById("visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = now - Number(lastVisit);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    messageBox.textContent =
        days < 1
            ? "Back so soon! Awesome!"
            : `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
}

localStorage.setItem("lastVisit", now);
