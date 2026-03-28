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

// timestamp
const timestampField = document.getElementById("timestamp");
if (timestampField) {
    timestampField.value = new Date().toISOString();
}

// modals
function openModal(id) {
    document.getElementById(id).showModal();
}

function closeModal(id) {
    document.getElementById(id).close();
}

document.querySelectorAll("[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.dataset.modal;
        document.getElementById(id).showModal();
    });
});