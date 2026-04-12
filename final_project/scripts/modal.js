export function openModal(game) {
    const modal = document.querySelector("#modal");

    if (!modal) return;

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${game.title}</h2>
            <p>${game.description}</p>
            <p>${game.year} | ${game.genre}</p>
            <button id="closeModal">Close</button>
        </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.querySelector("#closeModal").onclick = () => {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
    };

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
        }
    };
}