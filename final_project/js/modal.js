export function openModal(game) {
  const modal = document.querySelector("#modal");

  modal.innerHTML = `
    <div class="modal-content">
      <h2>${game.title}</h2>
      <p>${game.description}</p>
      <p>${game.year} | ${game.genre}</p>
      <button id="closeModal">Close</button>
    </div>
  `;

  modal.classList.add("open");

  document.querySelector("#closeModal").onclick = () => {
    modal.classList.remove("open");
  };
}