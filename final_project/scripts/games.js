import { openModal } from "./modal.js";

async function loadGames() {
    try {
        const res = await fetch("data/games.json");
        const games = await res.json();

        const container = document.querySelector("#gamesContainer");

        container.innerHTML = games.map(game => `
            <div class="card">
                <img src="${game.image}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>${game.genre}</p>
                <button data-id="${game.id}">Details</button>
            </div>
        `).join("");

        document.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => {
                const game = games.find(g => g.id == btn.dataset.id);
                openModal(game);
            });
        });

    } catch (error) {
        console.error("Error loading games:", error);
    }
}

loadGames();