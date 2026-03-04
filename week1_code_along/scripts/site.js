//store the selected element that we are going to use
const navButton = document.getElementById(`ham-btn`)

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
});
