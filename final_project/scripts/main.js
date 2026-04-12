const menuBtn = document.querySelector("#menuBtn");
const navList = document.querySelector("#navList");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
});

// footer
document.querySelector("#copyright").textContent =
    `© ${new Date().getFullYear()} GameVault`;

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;