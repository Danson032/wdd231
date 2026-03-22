const container = document.getElementById("spotlight-container");

const url = "data/members.json";

async function loadSpotlights() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch members");

        const data = await response.json();

        const members = data.members || data;

        const qualified = members.filter(member => {
            const level = member.membership;

            if (typeof level === "string") {
                return level.toLowerCase() === "gold" || level.toLowerCase() === "silver";
            }

            if (typeof level === "number") {
                return level === 3 || level === 2;
            }

            return false;
        });

        const shuffled = shuffleArray(qualified);

        const count = Math.floor(Math.random() * 2) + 2;
        const selected = shuffled.slice(0, count);

        displaySpotlights(selected);

    } catch (error) {
        console.error("Spotlight error:", error);
        container.innerHTML = "<p>Spotlights unavailable</p>";
    }
}

function displaySpotlights(members) {
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        const image = member.logo || member.image || "images/default.png";

        card.innerHTML = `
            <img src="${image}" alt="${member.name} logo" loading="lazy">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Membership:</strong> ${formatMembership(member.membership)}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(card);
    });
}

function formatMembership(level) {
    if (typeof level === "string") {
        return level.charAt(0).toUpperCase() + level.slice(1);
    }

    if (level === 3) return "Gold";
    if (level === 2) return "Silver";
    if (level === 1) return "Bronze";

    return "Member";
}

function shuffleArray(array) {
    return array
        .map(item => ({ sort: Math.random(), value: item }))
        .sort((a, b) => a.sort - b.sort)
        .map(item => item.value);
}

loadSpotlights();