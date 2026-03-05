const hamButton = document.getElementById('ham-btn');
const navButton = document.getElementById('nav');
hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('show');
    navButton.classList.toggle('show');
})

document.getElementById("lastDateModified").innerHTML = document.lastModified;