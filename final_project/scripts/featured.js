export async function loadFeatured() {
    const res = await fetch("data/games.json");

    if (!res.ok) {
        console.error("Failed to load games.json");
        return;
    }

    const games = await res.json();

    // This will Take first 4 games as featured
    const featured = games.slice(0, 4);

    const container = document.querySelector("#featured");

    if (!container) return;

    container.innerHTML = featured.map(game => `
        <div class="card">
            <h3>${game.title}</h3>
            <p>${game.genre}</p>
        </div>
    `).join("");
}