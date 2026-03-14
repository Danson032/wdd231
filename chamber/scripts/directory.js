const membersContainer = document.getElementById('membersContainer');
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');

gridBtn.addEventListener('click', () => {
    membersContainer.className = 'grid-view';
});
listBtn.addEventListener('click', () => {
    membersContainer.className = 'list-view';
});

async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> <a href="tel:${member.phone}">${member.phone}</a></p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership:</strong> ${membershipLevel(member.membership)}</p>
        `;

        membersContainer.appendChild(card);
    });
}

function membershipLevel(level) {
    switch(level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Member';
    }
}

getMembers();
