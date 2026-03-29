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

// modals//

// OPEN MODALS
document.querySelectorAll("[data-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById(btn.dataset.modal).showModal();
    });
});

// CLOSE MODALS
document.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById(btn.dataset.close).close();
    });
});

// THANK YOU PAGE DATA DISPLAY
const params = new URLSearchParams(window.location.search);

// Only run if we are on thankyou page
if (document.getElementById("fname")) {

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el && value) {
            el.textContent = value;
        }
    };

    setText("fname", params.get("fname"));
    setText("lname", params.get("lname"));
    setText("email", params.get("email"));
    setText("phone", params.get("phone"));
    setText("business", params.get("business"));

    const rawDate = params.get("timestamp");
    if (rawDate) {
        const date = new Date(rawDate);
        setText("timestampDisplay", date.toLocaleString());
    }
}