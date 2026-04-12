async function loadFeatured() {
  const res = await fetch("data/games.json");
  const games = await res.json();

  const featured = games.slice(0, 4);

  document.querySelector("#featured").innerHTML = featured.map(g => `
    <div class="card">
      <h3>${g.title}</h3>
      <p>${g.genre}</p>
    </div>
  `).join("");
}

loadFeatured();