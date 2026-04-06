import { places } from "../data/places.mjs";

const container = document.getElementById("cards-container");

places.forEach((place) => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

    container.appendChild(card);
});



const messageBox = document.getElementById("visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const diff = now - Number(lastVisit);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
        messageBox.textContent = "Back so soon! Awesome!";
    } else {
        messageBox.textContent = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
    }
}

localStorage.setItem("lastVisit", now);

//menu
const hamBtn = document.getElementById("ham-btn");
const nav = document.getElementById("nav");
const hamLabel = document.getElementById("ham-label");

if (hamBtn && nav && hamLabel) {
    hamBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
        hamBtn.classList.toggle("show");

        hamLabel.textContent =
            hamBtn.classList.contains("show") ? "Close" : "Menu";
    });
}

// footer
const lastModifiedEl = document.getElementById("lastModified");
const copyrightEl = document.getElementById("copyright");

if (lastModifiedEl) {
    lastModifiedEl.textContent = "Last Updated: " + document.lastModified;
}

if (copyrightEl) {
    copyrightEl.textContent = "© " + new Date().getFullYear() + " Nairobi Chamber";
}