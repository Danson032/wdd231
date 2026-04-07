// Menu button
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

// Footer
document.getElementById("lastModified").textContent =
    "Last Updated: " + document.lastModified;

document.getElementById("copyright").textContent =
    "© " + new Date().getFullYear() + " Nairobi Chamber";

// 📌 FETCH JSON + BUILD CARDS
const container = document.getElementById("cards-container");

async function loadPlaces() {
    const response = await fetch("./data/places.json");
    const places = await response.json();

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
}

loadPlaces();

// Visit Message
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